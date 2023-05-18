"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function PaginationButtons({ length }) {
  const pathName = usePathname();
  const term = useSearchParams().get("searchTerm");
  const start = Number(useSearchParams().get("start")) || 1;

  return (
    <div className={`px-4 py-10 flex text-blue-700 space-x-28`}>
      {start > 1 && (
        <Link href={`${pathName}?searchTerm=${term}&start=${start - 10}`}>
          <div className="flex flex-col cursor-pointer items-start hover:underline">
            <GrFormPreviousLink />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {start <= length - 10 && (
        <Link href={`${pathName}?searchTerm=${term}&start=${start + 10}`}>
          <div className="flex flex-col cursor-pointer items-end hover:underline">
            <GrFormNextLink />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
