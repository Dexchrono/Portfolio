import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import GenrePage from "./pages/GenrePage/GenrePage";
import GenresListPage from "./pages/GenresListPage/GenresListPage";
import "./styles/normalize.css";
import "./styles/global.css";
import "./styles/media.css";
import "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="movie/:movieId" element={<MoviePage />} />
        <Route path="genre/:genre" element={<GenrePage />} />
        <Route path="genres" element={<GenresListPage />} />
        {/* <Route path="user/:userId" element={<UserPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
