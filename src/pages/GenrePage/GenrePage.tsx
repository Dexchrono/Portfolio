import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MoviesList from "../../components/MoviesList/MoviesList";

const GenrePage = () => {
  return (
    <>
      <h1 className="visually-hidden">Маруся - каталог фильмов по жанру</h1>
      <Header />
      <section>
        <div className="container">
          <MoviesList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GenrePage;
