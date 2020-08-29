const API_KEY = 'ZHEtr66uzj2401o3lsM6eqzsyxG7AgoG';

export default function getGifs(keyword = 'morty') {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=3&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      console.log(response);
      const { data } = response;
      const gifs = data.map(image => {
        const { id, title, images } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
