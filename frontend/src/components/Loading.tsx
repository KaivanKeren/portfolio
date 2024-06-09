// components/Loading.js
import { FaReact } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-light bg-light-pattern dark:bg-dark dark:bg-dark-pattern z-50">
      <div className="hidden">
        <DarkModeToggle />
      </div>
      <FaReact className="animate-spin-slow text-5xl text-blue-500" />
    </div>
  );
}
