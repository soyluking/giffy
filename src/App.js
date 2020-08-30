import React from 'react';
import { Route } from 'wouter';

import Home from './pages/Home';
import ListOfGifs from './components/ListOfGifs';
import Gif from './components/Gif';

import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1 className='App-title'>
          <a href='/'>Giffy</a>
        </h1>

        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={ListOfGifs} />
        <Route path='/gifs/:slug' component={Gif} />
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
