import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: black; /* Navbar 배경색 */
  color: white; /* 텍스트 색상 */
  position: fixed; /* 스크롤 시에도 고정 */
  width: 100%; /* 화면 전체 너비 */
  top: 0; /* 상단에 고정 */
  z-index: 1000; /* 다른 요소보다 위에 있도록 설정 */
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px; /* 링크 간의 간격 */
  margin-right: 50px;
  justify-content: flex-end; /* 오른쪽 정렬 */
`;

const Button = styled.button`
  background-color: transparent; /* 투명한 배경 */
  color: white; /* 텍스트 색상 */
  border: 2px solid white; /* 테두리 설정 */
  border-radius: 20px; /* 둥근 테두리 */
  padding: 10px 20px; /* 여백 설정 */
  cursor: pointer; /* 마우스 포인터 모양 변경 */
  transition: background-color 0.3s;

  &:hover {
    background-color: white; /* 마우스 오버 시 배경색 변경 */
    color: black; /* 텍스트 색상 변경 */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>My Movie App</Logo>
      </Link>
      <NavLinks>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;