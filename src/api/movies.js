// src/api/movies.js
import { mockMovies } from '../mocks/movies';

export const fetchMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMovies); // mock 데이터를 반환
    }, 1000); // 1초 후에 데이터를 반환
  });
};