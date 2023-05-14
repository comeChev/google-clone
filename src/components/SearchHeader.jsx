import Image from "next/image";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SignInButton from "./SignInButton";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 justify-between items-center">
        <Link href="/" className="min-w-[120px]">
          <Image
            width="120"
            height="40"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className="select-none"
            alt="Google"
          />
        </Link>

        <div className="flex-1">
          <SearchForm />
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex">
            <RiSettings3Line className="header-icon " />
            <TbGridDots className="header-icon " />
          </div>
          <div className="hidden md:flex">
            <SignInButton />
          </div>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
