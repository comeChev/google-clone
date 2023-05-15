import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import SignInButton from "./SignInButton";
import ThemeButton from "./ThemeButton";

export default function HomeHeader() {
  return (
    <header className="flex justify-between p-5 text-sm select-none items-center">
      <ThemeButton />
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          target="_blank"
          className="hover:underline"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          target="_blank"
          className="hover:underline"
        >
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-md cursor-pointer" />
        <SignInButton />
      </div>
    </header>
  );
}
