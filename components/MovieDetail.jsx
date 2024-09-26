// src/pages/MovieDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch('/trailerflix.json');
        const data = await response.json();
        const movie = data.find(item => item.id === parseInt(id));

        if (movie) {
          setMovie(movie);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    getMovieDetails();
  }, [id]);

  if (error) {
    return <p className="error">Película no encontrada.</p>;
  }

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.titulo} />
      </div>
      <div className="movie-info">
        <h2>{movie.titulo}</h2>
        <p><strong>Resumen:</strong> {movie.resumen}</p>
        <iframe width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
        <p><strong>Reparto:</strong> {movie.reparto}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
