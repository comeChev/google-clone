export default function page({ searchParams }) {
  const { searchTerm } = searchParams;

  return <div>Ricerca immagini : {searchTerm}</div>;
}
