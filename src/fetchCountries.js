const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${searchParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}