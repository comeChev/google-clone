export async function getIpCountry() {
  return await fetch("https://geolocation-db.com/json/")
    .then((res) => res.json())
    .then((data) => data.country_name);
}
