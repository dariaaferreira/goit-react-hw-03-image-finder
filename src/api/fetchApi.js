const API_KEY = "34850970-a8e6c100d46912143d60db3a6";

export const fetchImages = (query, page = 1, perPage = 12) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json().then(data => data.hits);
  });
}
