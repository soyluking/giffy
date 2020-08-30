import React from 'react';
import { Route, Link } from 'wouter';

import Home from './pages/Home/';
import SearchResults from './pages/SearchResults/';
import Detail from './pages/Detail/';

import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1 className='App-title'>
          <Link to='/'>Giffy</Link>
        </h1>

        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/gifs/:slug' component={Detail} />
      </section>
      <footer className='App-footer'>
        <p>
          Powered By <strong>GIPHY</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
