import { getIpInfo } from "@/utils/IP";
import CountryLookUp from "./CountryLookUp";

export default async function Footer(req) {
  const ipInfos = await getIpInfo();

  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      {/* <div className="border-b border-gray-300 px-8 py-3">
        <CountryLookUp ipInfos={ipInfos} />
      </div> */}
      <div className=" flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
