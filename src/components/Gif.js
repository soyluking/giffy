import React, { useState, useEffect } from 'react';
import getGif from './../services/getGif';

function Gif({ params }) {
  const { slug } = params;
  const id = slug.split('-').pop();
  const [gif, setGif] = useState(null);

  useEffect(() => {
    getGif(id).then(gif => setGif(gif));
  }, [id, slug]);

  if (!gif)
    return (
      <div className='loading'>
        <span role='img' aria-label='Emoji esperando'>
          🙄
        </span>{' '}
        esto se esta demorando
      </div>
    );

  const { title, images } = gif;
  const { url } = images.original;

  return (
    <article>
      <img src={url} alt={title} />
    </article>
  );
}

export default Gif;
