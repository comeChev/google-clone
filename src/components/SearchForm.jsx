"use client";

import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const params = useSearchParams();
  const page = usePathname();
  const ref = useRef(null);
  const [search, setSearch] = useState(params.get("searchTerm") || "");
  const router = useRouter();

  const handleReset = () => {
    if (search) {
      setSearch("");
      ref.current.focus();
    }
  };
  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      return;
    }
    if (page === "/search/image") {
      router.push(`/search/image?searchTerm=${search}`);
    } else {
      router.push(`/search/web?searchTerm=${search}`);
    }
  };

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-grow items-center justify-between sm:border-r-2 border-gray-300">
        <input
          className="focus:outline-none w-full"
          placeholder="Search Google or type a URL"
          value={search}
          onChange={handleChange}
          ref={ref}
        />
        {search && (
          <RxCross2
            className="cursor-pointer text-gray-500 text-2xl sm:mr-2"
            onClick={handleReset}
          />
        )}
      </div>
      <div className="flex items-center pl-4 space-x-2">
        <BsFillMicFill className="hidden sm:flex cursor-pointer text-blue-500 text-xl" />
        <AiOutlineSearch
          className={`${
            search.trim() === ""
              ? "text-gray-400"
              : "text-blue-500 cursor-pointer"
          } text-2xl`}
          onClick={handleSubmit}
          disabled={search.trim() === ""}
        />
      </div>
    </form>
  );
}
