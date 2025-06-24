import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { IMovie } from "../../types/Movie";
import Api from "../../api/api";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

const Header = () => {
  const [data, setData] = useState<IMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusState, setFocusState] = useState(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const sendSearchQuery = useCallback(
    async (searchQuery: string): Promise<void> => {
      try {
        const data = await Api.getMovies("5", searchQuery);
        setData(data);
      } catch (error) {
        console.error("Search error:", error);
        setData([]);
      }
    },
    [],
  );

  useEffect(() => {
    sendSearchQuery(searchQuery);
  }, [searchQuery, sendSearchQuery]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <a className={styles.header__logo} href="#">
              <img
                src="/logo.png"
                alt="ВК Маруся логотип"
                width="144"
                height="32"
              />
            </a>
            <nav className={`${styles.header__nav} ${styles.nav}`}>
              <ul className={`${styles.nav__list} list-reset`}>
                <li className={styles.nav__item}>
                  <a className={styles.nav__link} href="/">
                    Главная
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a className={styles.nav__link} href="/genres">
                    Жанры
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <div className={`${styles.nav__search} ${styles.search}`}>
                    <input
                      id="search"
                      name="search"
                      className={styles.search__input}
                      type="search"
                      placeholder="Поиск"
                      value={searchQuery}
                      onFocus={() => setFocusState(true)}
                      onBlur={() => {
                        setFocusState(false);
                        setSearchQuery("");
                      }}
                      onChange={handleSearch}
                    ></input>
                    {focusState && <SearchDropdown movies={data} />}
                  </div>
                </li>
              </ul>
            </nav>
            <button className={`${styles.header__btn} ${styles.auth__btn}`}>
              Войти
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
