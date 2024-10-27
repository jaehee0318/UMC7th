import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { PiFilmSlateBold } from "react-icons/pi";

const SidebarContainer = styled.div`
  width: 150px; /* Sidebar 너비 설정 */
  background-color: black; /* Sidebar 배경색 설정 */
  padding: 30px; /* Sidebar 패딩 설정 */
  color: white; /* 텍스트 색상 설정 */
`;

const SearchLink = styled(Link)`
  display: flex; /* 아이콘과 텍스트를 가로로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  color: white; /* 텍스트 색상 */
  text-decoration: none; /* 밑줄 제거 */
  margin-top: 20px; /* 위쪽 여백 설정 */
`;

const SearchText = styled.span`
  margin-left: 10px; /* 아이콘과 텍스트 사이 간격 */
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SearchLink to="/search">
        <FaSearch />
        <SearchText>찾기</SearchText>
      </SearchLink>
      <SearchLink to="/category">
      <PiFilmSlateBold />
      <SearchText>영화</SearchText>
      </SearchLink>
    </SidebarContainer>
  );
};

export default Sidebar;