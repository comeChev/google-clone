"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function PaginationButtons({ length }) {
  const pathName = usePathname();
  console.log(pathName);
  const term = useSearchParams().get("searchTerm");
  console.log(term);
  const startIndex = Number(useSearchParams().get("start")) || 1;

  return (
    <div
      className={`${
        pathName === "/search/web" && "max-w-4xl"
      } px-4 py-10 flex text-blue-700 ${
        startIndex <= 10 ? "justify-end" : "justify-between"
      }`}
    >
      {startIndex > 10 && (
        <Link href={`${pathName}?searchTerm=${term}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-start hover:underline">
            <GrFormPreviousLink />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= length - 10 && (
        <Link href={`${pathName}?searchTerm=${term}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-end hover:underline">
            <GrFormNextLink />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
