import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: true, msg: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('batman');
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setLoading(false);
        setError({ show: false });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError({ show: true, msg: 'No Movie Found' });
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);
  return (
    <AppContext.Provider value={{ loading, movies, query, error, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
