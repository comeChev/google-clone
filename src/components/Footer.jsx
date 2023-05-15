import { getIpCountry } from "@/utils/IP";
import CountryLookUp from "./CountryLookUp";

export default async function Footer(req) {
  const ipCountry = getIpCountry();

  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b border-gray-300 px-8 py-3">
        <CountryLookUp ipCountry={ipCountry} />
      </div>
      <div className=" flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">Chi siamo</li>
          <li className="link">Pubblicità</li>
          <li className="link">Soluzioni aziendali</li>
          <li className="link">Come funziona la ricerca</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Termini</li>
          <li className="link">Impostazioni</li>
        </ul>
      </div>
    </footer>
  );
}
