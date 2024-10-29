import styled from "styled-components";
import useCustomFetch from "../../../hooks/useCustomFetch";

const MovieDetailInfo = ({movieId}) =>{
    const {data: movies, isLoading,isError}= useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    
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

    const backdropImage = `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`;
    return (
        <BackgroundImage backdropPath={backdropImage}>
            <InfoTitle>{movies.title}</InfoTitle>
            <InfoAverage>평균 {movies.vote_average?.toFixed(1)}</InfoAverage>
            <InfoRelease>{movies.release_date?.slice(0, 4)}</InfoRelease>
            <InfoRunTime>{movies.runtime}분</InfoRunTime>
            <InfoTagline>{movies.tagline}</InfoTagline>
            <InfoOverView>{movies.overview}</InfoOverView>
        </BackgroundImage>
    );
};

export default MovieDetailInfo;

const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 40px;
  background-image: ${({ backdropPath }) => `url(${backdropPath})`};
  background-size: 100% 100%;
  background-position: center;
  border-bottom: 5px solid white;

`;

const InfoTitle = styled.p`
  font-size: 22px;
  font-weight: 900;
  margin: 0;
`;

const InfoAverage = styled.p`
  font-size: 14px;
  margin: 0;
`;

const InfoRelease = styled.p`
  font-size: 14px;
  margin: 0;
`;

const InfoRunTime = styled.p`
  font-size: 14px;
  margin: 0;
`;

const InfoTagline = styled.p`
  font-size: 16px;
`;

const InfoOverView = styled.p`
  font-size: 14px;
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0;
`;