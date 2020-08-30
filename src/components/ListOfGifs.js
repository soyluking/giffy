import React, { useState, useEffect } from 'react';
import getGifs from './../services/getGifs';
import CardGif from './CardGif';

function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then(gifs => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading)
    return (
      <div className='loading'>
        <span role='img' aria-label='Emoji esperando'>
          🙄
        </span>{' '}
        esto se esta demorando
      </div>
    );

  return gifs.map(({ id, title, slug, url }) => (
    <CardGif id={id} title={title} slug={slug} url={url} key={id} />
  ));
}

export default ListOfGifs;
