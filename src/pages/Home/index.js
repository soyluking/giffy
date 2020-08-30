import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

import { useGifs } from '../../hooks/useGifs';

import ListOfGifs from '../../components/ListOfGifs';

const POPULAR_KEYWORDS = ['dance', 'clap', 'celebration', 'learning'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          value={keyword}
          placeholder='Buscar gifs aquí'
        />
      </form>
      <h3>Categorías populares</h3>
      <nav className='App-nav'>
        {POPULAR_KEYWORDS.map(keyword => (
          <Link to={`/search/${keyword}`} key={keyword}>
            {keyword}
          </Link>
        ))}
      </nav>
      <h3>Gifs populares</h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
