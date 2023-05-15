"use client";

import { useEffect, useState } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";

export default function CountryLookUp({ ipInfos }) {
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    ipInfos && setInfos(ipInfos);
  }, []);

  return infos ? (
    <div className="flex">
      <p className="border-r-2 border-gray-300 pr-4">{infos.country}</p>
      <p className="flex items-center ml-4">
        <AiTwotoneCheckCircle className="mr-1" />
        <span className="text-gray-600 font-bold">{infos.city}</span>
        <span className="hidden md:flex text-blue-800 pl-1">
          - From your IP address - Update Location
        </span>
      </p>
    </div>
  ) : null;
}
