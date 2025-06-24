import { IMovie } from "../../types/Movie";
import minutesToString from "../../utils/minutesToString";
import styles from "./SearchDropdown.module.css";

const SearchDropdown = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div className={styles.dropdown}>
      {movies && movies.length > 0 ? (
        <ul className={`${styles.dropdown__list} list-reset`}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <a
                className={`${styles.dropdown__link} link`}
                href={`/movie/${movie.id}`}
              >
                <div className={styles.dropdown__card}>
                  <picture className={styles.dropdown__picture}>
                    <img
                      className={`${styles.dropdown__img} img`}
                      src={movie.posterUrl}
                      alt="обложка фильма"
                      width="40"
                      height="52"
                    />
                  </picture>
                  <div className={styles.dropdown__heading}>
                    <div className={styles.dropdown__rating}>
                      <svg width="16" height="16" aria-hidden="true">
                        <use href="/sprites.svg#icon-star"></use>
                      </svg>
                      {movie.tmdbRating}
                    </div>
                    <span className={"movieCard__year"}>
                      {movie.releaseYear}
                    </span>
                    <span className={"movieCard__genre"}>{movie.genres}</span>
                    <span className={"movieCard__duration"}>
                      {minutesToString(movie.runtime)}
                    </span>
                  </div>
                  <h2 className={styles.dropdown__title}>{movie.title}</h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};
export default SearchDropdown;
