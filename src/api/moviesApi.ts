import { IMovie } from "../types/Movie";
import { BASE_URL } from "./config";

export const getMovies = async (genre?: string): Promise<IMovie[]> => {
  let url = `${BASE_URL}/movie`;
  if (genre) {
    url += `?genre=${encodeURIComponent(genre)}`;
  }
  const response = await fetch(url);
  const data: IMovie[] = await response.json();
  return data;
};

export const getTopTenMovies = async (): Promise<IMovie[]> => {
  const url = `${BASE_URL}/movie/top10`;
  const response = await fetch(url);
  const data: IMovie[] = await response.json();
  return data;
};

export const getMovieGenres = async (): Promise<Pick<IMovie, "genres">[]> => {
  const url = `${BASE_URL}/movie/genres`;
  const response = await fetch(url);
  const data: Pick<IMovie, "genres">[] = await response.json();
  return data;
};

export const getMovie = async (movieId: number): Promise<IMovie> => {
  const url = `${BASE_URL}/movie/${movieId}`;
  const response = await fetch(url);
  const data: IMovie = await response.json();
  return data;
};

export const getRandomMovie = async (): Promise<IMovie> => {
  const url = `${BASE_URL}/movie/random`;
  const response = await fetch(url);
  const data: IMovie = await response.json();
  return data;
};
