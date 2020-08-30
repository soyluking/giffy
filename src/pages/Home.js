import React from 'react';
import { Link } from 'wouter';

function Home() {
  return (
    <nav className='App-nav'>
      <Link to='/search/peaky-blinders'>Peaky Blinders</Link>
      <Link to='/search/better-call-saul'>Better Call Saul</Link>
      <Link to='/search/stranger-things'>Stranger Things</Link>
    </nav>
  );
}

export default Home;
