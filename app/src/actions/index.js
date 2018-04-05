import axios from 'axios';

const GIPHY_API_KEY = `eIRj58ROhk5HPIC7FqKTJDDH4bcGYc7W`;
const SEARCH_URL = `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=75`;
const TRENDING_URL = `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=75`;

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_TRENDING = 'FETCH_TRENDING';

export function fetchSearch(search) {
  const url = `${SEARCH_URL}&q=${search}`;
  const request = axios.get(url);

  return {
    type: FETCH_SEARCH,
    payload: request
  };
}

export function fetchTrending() {
  const url = `${TRENDING_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_TRENDING,
    payload: request
  };
}
