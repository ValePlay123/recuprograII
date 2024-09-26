// src/pages/MovieDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import trailerData from '../trailerflix.json';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = trailerData.find(movie => movie.id === parseInt(id));
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Película no encontrada.</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.poster} alt={movie.titulo} />
      <h2>{movie.titulo}</h2>
      <p><strong>Resumen:</strong> {movie.resumen}</p>
      <iframe width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
      <p><strong>Reparto:</strong> {movie.reparto}</p>
    </div>
  );
};

export default MovieDetail;

