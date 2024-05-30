// components/Loading.js
import { ClipLoader } from "react-spinners";
import DarkModeToggle from "./DarkModeToggle";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
      <div className="hidden">
        <DarkModeToggle />
      </div>
      <ClipLoader color={"#123abc"} loading={true} size={50} />
    </div>
  );
}
