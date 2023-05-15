"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineLoading } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function HomeSearch() {
  const [search, setSearch] = useState("");
  const [loadingRandomSearch, setLoadingRandomSearch] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search}`);
  }

  function handleReset() {
    if (setSearch) {
      setSearch("");
      ref.current.focus();
    }
  }

  async function randomSearch() {
    setLoadingRandomSearch(true);
    const word = await fetch(
      "https://random-word-api.herokuapp.com/word?lang=en"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Il y a eu un problème avec la requête");
        }
        return res.json();
      })
      .then((data) => data[0]);
    router.push(`/search/web?searchTerm=${word}`);
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex-col sm:max-w-xl lg:max-w-2xl"
    >
      <div className="flex items-center gap-4 w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow">
        <AiOutlineSearch className="text-gray-800 text-lg" />
        <input
          type="text"
          ref={ref}
          placeholder="Search Google or type an URL"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="flex-grow focus:outline-none"
        />

        {search && (
          <RxCross2
            onClick={handleReset}
            className="cursor-pointer text-gray-800 text-lg"
          />
        )}

        <BsFillMicFill className="h-5 text-gray-500 text-lg hover:text-blue-500 cursor-pointer" />
      </div>
      <div className="flex flex-col mt-4 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center items-center select-none">
        <button className="btn" type="submit">
          Google Search
        </button>

        <button
          onClick={randomSearch}
          className="btn flex justify-center items-center"
          disabled={loadingRandomSearch}
        >
          {loadingRandomSearch ? (
            <AiOutlineLoading className="text-blue-500 animate-spin text-xl" />
          ) : (
            <span>I'm Feeling Lucky</span>
          )}
        </button>
      </div>
    </form>
  );
}
