import styled from "styled-components";
import useCustomFetch from "../../../hooks/useCustomFetch";

const MovieDetailCredit = ({movieId}) =>{
    const {data: movies, isLoading,isError}= useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
    
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
        <>
            <p style={{color: 'white', fontWeight: 'bold', fontSize: '24px'}}>감독/출연</p>
            <CreditBox>
                {movies.cast?.map((movie)=>(
                    <CharacterName key ={movie.id}>
                        <PersonImage 
                          src = {`https://image.tmdb.org/t/p/w500${movie.profile_path}`}/>
                        <CreditName>{movie.name}</CreditName>
                        <CreditCharacterName>{movie.character}</CreditCharacterName>
                    </CharacterName>
                ))}
            </CreditBox>
        </>
    );
};

export default MovieDetailCredit;

const CreditBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
`;

const CharacterName = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px; 
`;

const PersonImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); 
`;

const CreditName = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 700; 
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
`;

const CreditCharacterName = styled.p`
    margin: 0;
    font-size: 10px;
    font-weight: 600;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
`;