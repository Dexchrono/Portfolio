import Header from "../../components/Header/Header";
import RandomMovie from "../../components/RandomMovie/RandomMovie";
import TopTenMovies from "../../components/TopTenMovies/TopTenMovies";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Маруся - онлайн-кинотеатр</h1>
      <RandomMovie />
      <TopTenMovies />
      <Footer />
    </>
  );
};

export default HomePage;
