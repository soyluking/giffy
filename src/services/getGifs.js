const API_KEY = 'ZHEtr66uzj2401o3lsM6eqzsyxG7AgoG';
const API_LIMIT = '5';

export default async function getGifs(keyword = 'morty') {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${API_LIMIT}&offset=0&rating=g&lang=es`;

  const res = await fetch(API_URL);
  const response = await res.json();
  const { data } = response;

  const gifs = data.map(image => {
    const { id, title, slug, images } = image;
    const { url } = images.downsized_medium;
    return { id, title, slug, url };
  });

  return gifs;
}
