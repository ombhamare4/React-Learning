import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  // https://swapi.dev/api/films/
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went Wrong');
      }
      const data = await response.json();
      const transformMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      });
      setMovies(transformMovies);

    } catch (error) {
      setError(error);
      // setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  let content = <p>Found No Movies</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (isLoading) {
    content = <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  if (error) {
    content = <p>Something Went Wrong</p>
  }

  return (
    <React.Fragment>
      {/* <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section> */}
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Not Movies Find Yet</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading &&
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        } */}
      </section>
    </React.Fragment>
  );
}

export default App;
