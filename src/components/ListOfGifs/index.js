import React from 'react';
import CardGif from '../../components/CardGif/';

import './styles.css';

export default function ListOfGifs({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {gifs.map(({ id, title, slug, url }) => (
        <CardGif id={id} title={title} slug={slug} url={url} key={id} />
      ))}
    </div>
  );
}
