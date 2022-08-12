import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <main>
      <form className="search-form">
        <h2>search movies</h2>
        <input type="text" className="form-input" />
      </form>
      <section className="movies">
        <a className="movie" href="/movies/tt0372784">
          <article>
            <img
              src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              alt="Batman Begins"
            />
            <div className="movie-info">
              <h4 className="title">Batman Begins</h4>
              <p>2005</p>
            </div>
          </article>
        </a>
      </section>
    </main>
  );
}

export default App;
