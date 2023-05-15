export default async function WebSearchPage({ searchParams }) {
  const { searchTerm } = searchParams;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_API_CONTEXT_KEY}&q=${searchTerm}`
  ).then((res) => res.json());
  console.log(response);
  return (
    <div>
      <div>
        Circa {Number(response.searchInformation.totalResults)} risultati (
        {response.searchInformation.searchTime}s)
      </div>
      <div>
        <ul>
          {response.items.map((item) => (
            <li key={item.cacheId}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
