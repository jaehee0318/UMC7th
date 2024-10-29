import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { MovieContainer } from './components/MovieContainer';
import { MovieCard } from './components/MovieCard';
import { MoviePoster } from './components/MoviePoster';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategoryPage from './components/CategoryPage'; 
import { NowPlayingMovies, PopularMovies, UpComingMovies, TopRatedMovies } from './components/MoviePages';
import MovieDetailPage from './components/MovieDetail/MovieDetailPage';

const LayoutContainer = styled.div`
  display: flex;
  background-color: #333; /* 전체 배경색 설정 */
  height: 100vh; /* 전체 높이 설정 */
  margin-top: 60px; /* Navbar 높이만큼 아래로 이동 */
`;

const SidebarContainer = styled.div`
  width: 400px; /* Sidebar 너비 설정 */
  background-color: #444; /* Sidebar 배경색 설정 */
  padding: 30px; /* Sidebar 패딩 설정 */
`;

const ContentContainer = styled.div`
  flex: 1; /* 나머지 공간 차지 */
  padding: 20px; /* 패딩 설정 */
  color: white; /* 텍스트 색상 */
`;

// 영화 페이지 컴포넌트
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDE3NmQ3M2RhNjhiNmFmMTY3OThjMmI4OThjNDc0OCIsIm5iZiI6MTcyODQ3NjEzMC43NzcyMDksInN1YiI6IjY3MDY3MGE2ZGM1NGYyOWQwZWFiNjQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WXKUmHMX0n1JOHuJjgClsxfXYamLAfPCPmIAyXoSEao`,
        }
      });
      setMovies(response.data);
    };

    getMovies();
  }, []);

  return (
    <MovieContainer>
      {movies.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </MovieCard>
      ))}
    </MovieContainer>
  );
};

const HomePage = () => {
  return (
    <ContentContainer>
      <h1>홈페이지</h1>
    </ContentContainer>
  );
};

// 로그인 페이지 컴포넌트
const LoginPage = () => {
  return (
    <ContentContainer>
      <h1>로그인 페이지</h1>
    </ContentContainer>
  );
};

// 회원가입 페이지 컴포넌트
const SignupPage = () => {
  return (
    <ContentContainer>
      <h1>회원가입 페이지</h1>
    </ContentContainer>
  );
};

const SearchPage = () => {
  return (
    <ContentContainer>
      <h1>검색 페이지</h1>
    </ContentContainer>
  );
};

// 레이아웃 컴포넌트
const Layout = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        <ContentContainer>
          <Outlet /> {/* Outlet을 통해 자식 경로 렌더링 */}
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 부모 레이아웃 설정
    children: [
      {
        path: '/', 
        element: <HomePage /> // 홈페이지
      },
      {
        path: '/login',
        element: <LoginPage /> // 로그인 페이지
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/search',
        element: <SearchPage/>
      },
      {
        path: '/category',
        element: <CategoryPage/>,
      },
      {
        path: 'movies/now-playing',
        element: <NowPlayingMovies/>
      },
      {
        path: 'movies/popular',
        element: <PopularMovies/>
      },
      {
        path: 'movies/top-rated',
        element: <TopRatedMovies/>
      },
      {
        path: 'movies/up-coming',
        element: <UpComingMovies/>
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetailPage/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;