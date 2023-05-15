import PaginationButtons from "@/components/PaginationButtons";
import WebSearchResults from "@/components/WebSearchResults";
import { getWebResults } from "@/utils/ApiGoogle";
import Link from "next/link";

const SearchResultsHeader = ({ infos }) => {
  return (
    <p className="text-gray-600 text-sm mb-5 mt-3">
      About {Number(infos.totalResults).toLocaleString("en-EN")} results (
      {Number(infos.searchTime).toFixed(2)} seconds)
    </p>
  );
};

export default async function WebSearchPage({ searchParams }) {
  const { searchTerm } = searchParams;
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await getWebResults(searchTerm);

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
    <div className="pl-4 md:pl-52 pb-24">
      <SearchResultsHeader infos={response.searchInformation} />
      <WebSearchResults results={response.items} />
      <PaginationButtons length={response.searchInformation.totalResults} />
    </div>
  );
}
