import ImageSearchResults from "@/components/ImageSearchResults";
import SearchImageOptions from "@/components/SearchImageOptions";
import { getImageBySize } from "@/utils/ApiGoogle";
import Link from "next/link";

const SearchResultsHeader = ({ infos }) => {
  return (
    <p className="text-gray-600 text-sm mb-5 mt-3">
      About {Number(infos.totalResults).toLocaleString("en-EN")} results (
      {Number(infos.searchTime).toFixed(2)} seconds)
    </p>
  );
};

export default async function ImageSearchPage({ searchParams }) {
  const { searchTerm, size } = searchParams;
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const imgSize = !size ? "undefined" : size;
  const response = await getImageBySize(imgSize, searchTerm);
  console.log(response);

  if (!response.items) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg flex flex-col justify-center items-center">
          Try search something else or go back to homepage
          <span className="flex">
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full pl-4 md:pl-52 pb-24 pr-4">
      {/* <SearchImageOptions searchTerm={searchTerm} /> */}
      <SearchResultsHeader infos={response.searchInformation} />
      <ImageSearchResults results={response.items} />
    </div>
  );
}
