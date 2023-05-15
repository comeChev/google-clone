import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import Image from "next/image";

export default function WebSearchResults({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4">
      {results.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="flex flex-col group">
            <Link href={result.image.contextLink} className="">
              <img
                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow mb-2"
                src={result.link}
                alt={result.title}
              />
            </Link>

            <Link href={result.image.contextLink}>
              <h2 className="text-xl truncate font-medium group-hover:underline decoration-blue-800 text-blue-800">
                {result.title}
              </h2>
            </Link>

            <Link href={result.image.contextLink}>
              <p className="text-sm text-gray-500 truncate group-hover:underline">
                {result.displayLink}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
