import React from 'react';
import { Link } from 'wouter';

import './styles.css';

function CardGif({ id, title, slug, url }) {
  return (
    <div className='CardGif'>
      <Link to={`/gifs/${slug}`}>
        <img src={url} alt={title} loading='lazy' />
      </Link>
    </div>
  );
}

export default CardGif;
