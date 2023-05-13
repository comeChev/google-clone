"use client";

import { useEffect, useState } from "react";

export default function CountryLookUp({ ipCountry }) {
  const [country, setCountry] = useState("Italia");
  useEffect(() => {
    ipCountry && setCountry(ipCountry);
  }, []);
  return <div>{country}</div>;
}
