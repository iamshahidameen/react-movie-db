import React, { useRef } from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  const searchMovie = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchMovie.current.value);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        ref={searchMovie}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
