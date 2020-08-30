import React from 'react';
import { Route, Link } from 'wouter';

import Home from './pages/Home/';
import SearchResults from './pages/SearchResults/';
import Detail from './pages/Detail/';

import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import './App.css';

function App() {
  return (
    <StaticContext.Provider value={{ username: 'soyluking', subscribe: false }}>
      <div className='App'>
        <section className='App-content'>
          <h1 className='App-title'>
            <Link to='/'>Giffy</Link>
          </h1>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gifs/:slug' component={Detail} />
          </GifsContextProvider>
        </section>
        <footer className='App-footer'>
          <p>
            Powered By <strong>GIPHY</strong>
          </p>
        </footer>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
