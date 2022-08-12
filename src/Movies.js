import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies } = useGlobalContext();
  console.log(movies);
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { Title, Poster, Year, imdbID } = movie;
        return (
          <a className="movie" key={imdbID} href={`/movies/${imdbID}`}>
            <article>
              <img src={Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </a>
        );
      })}
    </section>
  );
};

export default Movies;
