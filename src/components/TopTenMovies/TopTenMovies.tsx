import { useEffect, useState } from "react";
import "./TopTenMovies.module.css";
import styles from "./TopTenMovies.module.css";
import { IMovie } from "../../types/Movie";
import Api from "../../api/api";

const TopTenMovies = () => {
  const [data, setData] = useState<IMovie[]>([]);

  const getData = async (): Promise<void> => {
    const data = await Api.getTopTenMovies();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.topMovies}>
        <div className="container">
          <div className={styles.topMovies__content}>
            <h2 className={styles.topMovies__title}>Топ 10 фильмов</h2>
            <ol className={`${styles.topMovies__list} list-reset`}>
              {data ? (
                data.map((movie) => (
                  <li className={styles.topMovies__item} key={movie.id}>
                    <a
                      className={styles.topMovies__link}
                      href={`movie/${movie.id}`}
                    >
                      <img
                        className={`${styles.topMovies__img} img`}
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
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTenMovies;
