const API_KEY = 'ZHEtr66uzj2401o3lsM6eqzsyxG7AgoG';

export default async function getGifs(id = '11d11t7w8xjE9W') {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  const res = await fetch(API_URL);
  const response = await res.json();
  const { data } = response;

  return data;
}
