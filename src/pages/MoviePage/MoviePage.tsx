import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieAboutPageContent from "../../components/MovieAboutPageContent/MovieAboutPageContent";
import { useParams } from "react-router";

const MoviePage = () => {
  const { movieId } = useParams();
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Маруся - онлайн-кинотеатр</h1>
      <MovieAboutPageContent id={Number(movieId)} />
      <Footer />
    </>
  );
};

export default MoviePage;
