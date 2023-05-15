import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div className="mb-8 max-w-4xl" key={result.cacheId}>
          <div className="flex flex-col group">
            <Link className="text-sm text-gray-500 truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="text-xl truncate font-medium group-hover:underline decoration-blue-800 text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
