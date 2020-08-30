import React from 'react';
import Spinner from '../../components/Spinner';
import useGlobalGifs from '../../hooks/useGlobalGifs';
// import getGif from '../../services/getGif';
import CardGif from '../../components/CardGif/';

export default function Detail({ params }) {
  const { slug } = params;
  const id = slug.split('-').pop();
  // const [gif, setGif] = useState(null);
  const gifs = useGlobalGifs();

  let detailGif;

  // if (gifs.length) {
  detailGif = gifs.find(singleGif => singleGif.id === id);
  // }

  // useEffect(() => {
  //   getGif(id).then(gif => setGif(gif));
  // }, [id, slug]);

  if (!detailGif) return <Spinner />;

  // const { title, images } = detailGif;
  // const { url } = images.original;

  return <CardGif {...detailGif} />;
}
