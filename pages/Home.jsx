// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trailerData from '../trailerflix.json';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una llamada de datos para obtener los trailers
    const fetchMovies = async () => {
      try {
        // Filtrando y ordenando por género (por ejemplo, Ciencia Ficción)
        const filteredMovies = trailerData.filter(movie => movie.gen === 'Ciencia Ficción');
        setMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Películas - Ciencia Ficción</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.titulo} />
              <h3>{movie.titulo}</h3>
              <p>{movie.categoria}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
