import styles from "./Header.module.css";

const Header = () => {
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
                    ></input>
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
