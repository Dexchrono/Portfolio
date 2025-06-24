import { useEffect, useState } from "react";
import Api from "../../api/api";
import { IMovie } from "../../types/Movie";
import styles from "./GenresList.module.css";

const GenresList = () => {
  const [data, setData] = useState<Pick<IMovie, "genres">[]>([]);

  const getData = async (): Promise<void> => {
    const data = await Api.getMovieGenres();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className={styles.genres__title}>Жанры фильмов</h2>
      <ul className={`${styles.genres__list} list-reset`}>
        {data ? (
          data.map((genre) => (
            <li className={styles.genres__item}>
              <a className={styles.genres__link} href={`/genre/${genre}`}>
                <div className={styles.genres__card}>
                  <figure className={styles.genres__figure}>
                    <img
                      className={styles.genres__img}
                      src={`src/assets/img/${genre}.jpg`}
                      alt={`обложка жанра ${genre}`}
                      width={290}
                      height={220}
                    />
                    <figcaption className={styles.genres__figcaption}>
                      {`${genre}`.charAt(0).toUpperCase() + `${genre}`.slice(1)}
                    </figcaption>
                  </figure>
                </div>
              </a>
            </li>
          ))
        ) : (
          <div>Загрузка...</div>
        )}
      </ul>
    </>
  );
};

export default GenresList;
