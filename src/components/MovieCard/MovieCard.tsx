import { FC, useState } from "react";
import styles from "./MovieCard.module.css";
import { IMovie } from "../../types/Movie";
import minutesToString from "../../utils/minutesToString";
import MovieTrailerPopup from "../MovieTrailerPopup/MovieTrailerPopup";

interface MovieCardProps {
  movie: IMovie;
  refresh: () => Promise<void>;
}

const MovieCard: FC<MovieCardProps> = ({ movie, refresh }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className={styles.movieCard}>
        <div className="container">
          <div className={styles.movieCard__content}>
            <div className={styles.movieCard__main}>
              <div className={styles.movieCard__about}>
                <div className={styles.movieCard__heading}>
                  <div className={styles.movieCard__rating}>
                    <svg width="16" height="16" aria-hidden="true">
                      <use href="/sprites.svg#icon-star"></use>
                    </svg>
                    {movie.tmdbRating}
                  </div>
                  <span className={styles.movieCard__year}>
                    {movie.releaseYear}
                  </span>
                  <span className={styles.movieCard__genre}>
                    {movie.genres}
                  </span>
                  <span className={styles.movieCard__duration}>
                    {minutesToString(movie.runtime)}
                  </span>
                </div>
                <h2 className={styles.movieCard__title}>{movie.title}</h2>
                <p className={styles.movieCard__description}>{movie.plot}</p>
              </div>
              <div className={styles.movieCard__controls}>
                <button
                  className={`${styles.movieCard__trailerBtn} btn btn--active`}
                  onClick={togglePopup}
                >
                  Трейлер
                </button>
                <MovieTrailerPopup
                  isOpen={isPopupOpen}
                  onClose={togglePopup}
                  trailerUrl={movie.trailerUrl}
                />
                <a
                  className={`${styles.movieCard__aboutBtn} btn`}
                  href={`/movie/${movie.id}`}
                >
                  О фильме
                </a>
                <button className={`${styles.movieCard__favoriteBtn} btn`}>
                  <svg width="24" height="24" aria-hidden="true">
                    <use href="/sprites.svg#icon-favorite"></use>
                  </svg>
                </button>
                <button
                  className={`${styles.movieCard__refreshBtn} btn`}
                  onClick={refresh}
                >
                  <svg width="24" height="24" aria-hidden="true">
                    <use href="/sprites.svg#icon-refresh"></use>
                  </svg>
                </button>
              </div>
            </div>

            <picture className={styles.movieCard__picture}>
              <img
                className={`styles.movieCard__img img`}
                src={movie.posterUrl}
                alt="обложка фильма"
                width="680"
                height="552"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
