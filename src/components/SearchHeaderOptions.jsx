"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const SearchOption = ({ pathName, type, text, Icon, searchTerm }) => {
  const router = useRouter();
  function handleClick() {
    router.push(`/search/${type}?searchTerm=${searchTerm}`);
  }
  return (
    <div
      onClick={handleClick}
      className={`flex items-center space-x-1 select-none border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
        pathName === `/search/${type}` && "!border-blue-500 !text-blue-600"
      }`}
    >
      <Icon className="text-md" />
      <p>{text}</p>
    </div>
  );
};

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const searchTerm = useSearchParams().get("searchTerm");

  return (
    <div className="flex space-x-2 select-none justify-start pl-4 md:justify-start md:pl-52 text-sm text-gray-700 mb-4 pb-0.5">
      <SearchOption
        pathName={pathName}
        text="All"
        Icon={AiOutlineSearch}
        searchTerm={searchTerm}
        type="web"
      />
      <SearchOption
        pathName={pathName}
        text="Images"
        Icon={BiImage}
        searchTerm={searchTerm}
        type="image"
      />
    </div>
  );
}
