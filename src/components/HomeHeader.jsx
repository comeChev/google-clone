import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm select-none">
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
          Immagini
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-md cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Registrati
        </button>
      </div>
    </header>
  );
}
