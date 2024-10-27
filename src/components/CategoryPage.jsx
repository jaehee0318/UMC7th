import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { NowPlayingMovies, PopularMovies, TopRatedMovies, UpComingMovies } from './MoviePages';

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const CategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-decoration: none; /* Link의 기본 스타일 제거 */
`;

const ImageContainer = styled.div`
  position: relative; /* 이미지와 레이블을 감쌀 컨테이너 */
  width: 500px;
  height: 300px;
  margin-bottom: 10px;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const categories = [
  { src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjVfMjUx/MDAxNjA4ODIyMzM4NjI3.vFshBNtQ2tvtKDon1wNGA4FkwU4s1qviZKGWs5AbUtsg.tJNW6_kuMY4XuY0AXEAd7AknyhuLLOzIOvD0J61oQK4g.JPEG.sosohan_n/IMG_7779.JPG?type=w800', label: '현재 상영중인 영화', path: '/movies/now-playing' },
  { src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjRfMTIg/MDAxNjA4ODIxNzQ5ODY3.lyg6DcZJsIYM9oSm-8wwJUMlgGJDITtlOW9tIyLYhScg.iy8J913-WdPV4tlvhbutYgXCk8PD3K4lZLrUT7qRtyYg.JPEG.sosohan_n/IMG_5573.JPG?type=w800', label: '인기있는 영화', path: '/movies/popular' },
  { src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjRfMjQ1/MDAxNjA4ODIxNzQxNzQ5.lVv09TqYaD9APwjokt5w8skd2e20pB29_nJ7ZTD3zAQg.lfDv84LHiuqXj77RpUJeadiVUmGRstAPlGZVHOSwvTwg.JPEG.sosohan_n/IMG_5942.jpg?type=w800', label: '높은 평가를 받은 영화', path: '/movies/top-rated' },
  { src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjRfMTk4/MDAxNjA4ODIxNzQzNTQx.bOgAIY02QqrlNEUoeFFpC5_PtX5J7gXmKCpuF2hyNs4g.lJh1NWNGqEioSRDjZTkoxgfVBsvngMb0-NGyylhPYF0g.JPEG.sosohan_n/IMG_5585.JPG?type=w800', label: '개봉 예정작', path: '/movies/up-coming' },
];

const CategoryPage = () => {
  return (
    <ContentContainer>
      <h1>카테고리</h1>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryCard to={category.path} key={index}>
            <ImageContainer>
              <CategoryImage src={category.src} alt={category.label} />
              <CategoryLabel>{category.label}</CategoryLabel>
            </ImageContainer>
          </CategoryCard>
        ))}
      </CategoryContainer>
      <Outlet />
    </ContentContainer>
  );
};

export default CategoryPage;