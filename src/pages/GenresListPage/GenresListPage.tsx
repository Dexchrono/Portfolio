import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Genres from "../../components/GenresList/GenresList";

const GenresListPage = () => {
  return (
    <>
      <h1 className="visually-hidden">Маруся - каталог жанров</h1>
      <Header />
      <section>
        <div className="container">
          <Genres />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GenresListPage;
