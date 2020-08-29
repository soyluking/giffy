import React from 'react';
import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';

import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>Giffy</h1>
        <nav className='App-nav'>
          <Link to='/gif/peaky-blinders'>Peaky Blinders</Link>
          <Link to='/gif/better-call-saul'>Better Call Saul</Link>
          <Link to='/gif/stranger-things'>Stranger Things</Link>
        </nav>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
