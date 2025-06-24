import { FC, useCallback, useEffect, useState } from "react";
import { IMovie } from "../../types/Movie";
import Api from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";

const RandomMovie: FC = () => {
  const [data, setData] = useState<IMovie>();

  const getData = useCallback(async (): Promise<void> => {
    const data = await Api.getRandomMovie();
    setData(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? (
        <MovieCard movie={data} refresh={getData} />
      ) : (
        <div>Загрузка...</div>
      )}
    </>
  );
};

export default RandomMovie;
