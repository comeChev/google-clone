const url = process.env.GOOGLE_API_URL;
const key = `key=${process.env.GOOGLE_API_KEY}`;
const context = `cx=${process.env.GOOGLE_API_CONTEXT_KEY}`;
const apiCall = `${url}&${key}&${context}`;
const apiCallImage = `${url}&${key}&${context}&searchType=image`;

export async function getImageResults(searchTerm, startIndex = 1) {
  if (startIndex === 1) startIndex = null;
  const callApi = `${apiCallImage}&q=${searchTerm}${
    startIndex ? `&start=${startIndex}` : ""
  }`;
  console.log(callApi);
  const results = await fetch(callApi).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });

  return results;
}

export async function getWebResults(searchTerm, startIndex = 1) {
  if (startIndex === 1) startIndex = null;
  const callApi = `${apiCall}&q=${searchTerm}${
    startIndex ? `&start=${startIndex}` : ""
  }`;
  console.log(callApi);
  const response = await fetch(callApi).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
  return response;
}
// 1 à 10 startIndex 1
// 11 à 20 startIndex 2 2*10 -9 = 20 -9 = 11
// 21 à 30 startIndex 3 3*10 -9 = 30 -9 = 21
// 31 à 40 startIndex 4 4*10 -9 = 40 -9 = 31
