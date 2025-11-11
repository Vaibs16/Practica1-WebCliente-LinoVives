export function searchSeries(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    });
}

export function seriesDetails(id) {
  const url = `https://api.tvmaze.com/shows/${id}`;
  return fetch(url).then((response) => response.json());
}
