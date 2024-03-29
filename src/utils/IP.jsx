export async function getIpCountry() {
  return await fetch("https://geolocation-db.com/json/")
    .then((res) => res.json())
    .then((data) => data.country_name);
}
export async function getIpInfo() {
  return await fetch("https://geolocation-db.com/json/")
    .then((res) => res.json())
    .then((data) => {
      const infos = { city: data.city, country: data.country_name };
      return infos;
    });
}
