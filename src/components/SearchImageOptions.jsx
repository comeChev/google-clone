"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchImageOptions({ searchTerm }) {
  const router = useRouter();
  const options = [
    { title: "ICO", size: "icon" },
    { title: "SM", size: "small" },
    { title: "MD", size: "medium" },
    { title: "LG", size: "large" },
    { title: "XL", size: "xlarge" },
    { title: "HUGE", size: "huge" },
    { title: "ALL", size: null },
  ];

  function handleChange(e) {
    console.log(e.currentTarget.value);
    router.push(`/search/image?q=${searchTerm}&size=${e.currentTarget.value}`);
  }

  return (
    <div>
      <select className="text-sm" onChange={handleChange}>
        {options.map((option, key) => (
          <option key={key} value={option.size} className="text-sm">
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
