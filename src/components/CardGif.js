import React from 'react';
import { Link } from 'wouter';

import './CardGif.css';

function CardGif({ id, title, slug, url }) {
  return (
    <Link to={`/gifs/${slug}`} className='CardGif'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  );
}

export default CardGif;
