// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster, titulo, categoria }) => {
  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        <div className="card-picture">
          <img src={poster} alt={titulo} title={titulo} />
        </div>
        <div className="card-bottom">
          <p className="card-bottom-title">{titulo}</p>
          <p>{categoria}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
