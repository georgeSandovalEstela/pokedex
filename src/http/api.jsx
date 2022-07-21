import { POKE_API } from "./Http";

export function getPokemonsByPage(page, setter) {
  let url = POKE_API + page;
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw response;
    })
    .then((data) => setter([...data.results]));
}
