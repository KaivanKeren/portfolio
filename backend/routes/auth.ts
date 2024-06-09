import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const jwtSecret = process.env.JWT_SECRET as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const authRoute = new Hono();

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Function to create a JWT token
const createToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    jwtSecret,
    { expiresIn: '1h' }
  );
};

// Login endpoint
authRoute.post(
  '/login',
  zValidator('json', userSchema),
  async (c) => {
    const { email, password } = await c.req.valid('json');
    
    // Fetch user data from custom users table
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
      
    if (error || !user) {
      return c.json({ error: 'Invalid email or password' }, 401);
    }

    // Compare provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return c.json({ error: 'Invalid email or password' }, 401);
    }

    // Generate a token for the user
    const token = createToken(user);

    return c.json({
      token,
      user: { id: user.id, email: user.email },
    });
  }
);

export { authRoute };
