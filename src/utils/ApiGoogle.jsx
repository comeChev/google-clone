export async function getImageBySize(size, searchTerm) {
  console.log(size);
  if (size === "undefined") size = null;
  const results = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${
      process.env.GOOGLE_API_KEY
    }&cx=${
      process.env.GOOGLE_API_CONTEXT_KEY
    }&q=${searchTerm}&searchType=image${size ? `&imgSize=${size}` : ""}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  });
  return results;
}
