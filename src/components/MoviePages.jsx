import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { axiosInstance } from "../api/axios-instance";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieCard = styled.div`
  margin: 10px;
  width: 200px;
`;

const MoviePoster = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 16px;
  margin: 5px 0;  // 상하 여백
`;

const MovieReleaseDate = styled.p`
  font-size: 14px;
  color: gray;  // 색상 변경
`;

// 영화 목록을 가져오는 재사용 가능한 컴포넌트
const MovieList = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);
  const {data, isLoading, isError} = useCustomFetch(endpoint);
  const navigate = useNavigate()
  const handleClickImage  = (movie) =>{
    navigate(`/movie/${movie.id}`);
  };

  useEffect(() => {
    if (data && data.results){
    setMovies(data.results);
    }
  }, [data]);

  if(isLoading){
    return <div>
      <h1 style={{color: 'white'}}>로딩 중 입니다...</h1>
    </div>
  }

  if(isError){
    return <div>
      <h1 style={{color: 'white'}}>에러 발생</h1>
    </div>
  }
  
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            onClick={()=> handleClickImage(movie)}
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
        </MovieCard>
      ))}
    </MovieContainer>
  );
};

// 현재 상영중인 영화 컴포넌트
const NowPlayingMovies = () => (
  <MovieList endpoint='/movie/now_playing?language=ko-KR&page=1'/>
);

// 인기 있는 영화 컴포넌트
const PopularMovies = () => (
  <MovieList endpoint='/movie/popular?language=ko-KR&page=1' />
);

// 높은 평가 영화 컴포넌트
const TopRatedMovies = () => (
  <MovieList endpoint='/movie/top_rated?language=ko-KR&page=1' />
);

// 개봉 예정 영화 컴포넌트
const UpComingMovies = () => (
  <MovieList endpoint='/movie/upcoming?language=ko-KR&page=1' />
);

export { NowPlayingMovies, PopularMovies, UpComingMovies, TopRatedMovies };