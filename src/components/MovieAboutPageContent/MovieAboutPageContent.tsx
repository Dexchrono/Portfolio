import { FC, useEffect, useState } from "react";
import { IMovie } from "../../types/Movie";
import Api from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardInfo from "../MovieCardInfo/MovieCardInfo";

const MovieAboutPageContent: FC<Pick<IMovie, "id">> = ({ id }) => {
  const [data, setData] = useState<IMovie>();

  const getData = async (): Promise<void> => {
    const data = await Api.getMovie(id);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? <MovieCard movie={data} /> : <div>Загрузка...</div>}
      {data ? <MovieCardInfo movie={data} /> : <div>Загрузка...</div>}
    </>
  );
};

export default MovieAboutPageContent;
