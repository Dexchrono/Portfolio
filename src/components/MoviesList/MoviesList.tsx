import { useEffect, useState } from "react";
import { IMovie } from "../../types/Movie";
import Api from "../../api/api";
import { useParams } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = () => {
  const { genre } = useParams<{ genre: string }>();
  const [data, setData] = useState<IMovie[] | undefined>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const data = await Api.getMovies(genre);
      setData(data);
    };

    getData();
  }, [genre]);

  return (
    <>
      <div className={styles.movies}>
        <div className="container">
          <div className={styles.movies__content}>
            <h2 className={styles.movies__title}>
              Лучшие фильмы в жанре {genre}
            </h2>
            <ul className={`${styles.movies__list} list-reset`}>
              {data ? (
                data.map((movie) => (
                  <li key={movie.id}>
                    <a href={`/movie/${movie.id}`}>
                      <img
                        className={styles.movies__img}
                        src={movie.posterUrl}
                        alt={movie.title}
                        width="224"
                        height="336"
                      />
                    </a>
                  </li>
                ))
              ) : (
                <div>Загрузка...</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
