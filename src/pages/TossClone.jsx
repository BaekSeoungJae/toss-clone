import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../img/토스헤더.png";
import MainImage from "../img/토스메인.png";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
`;

const Header = styled.div`
  width: 100%;
  height: 59px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
  border-color: ${({ hasShadow }) => (hasShadow ? "#e6e6e6" : "transparent")};
`;

const HeaderWrap = styled.div`
  width: 1140px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
`;

const HeaderLogo = styled.div`
  width: 76px;
  height: 100%;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TossLogo = styled.div`
  width: 65.63px;
  height: 50px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderMenu = styled.div`
  width: 949px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuBox = styled.div`
  padding: 0 8px;
  color: #4e5968;
  white-space: nowrap;
`;

const MenuName = styled.div`
  padding: 12px 10px;
  font-size: 14px;
  line-height: 20px;
  color: currentColor;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const LangBox = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto 0 0;
`;

// Main 관련 스타일
const MainBody = styled.div`
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${MainImage});
  background-size: cover; /* 이미지가 화면을 채우도록 설정 */
  background-position: center; /* 이미지 가운데 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
`;

const MainText = styled.div`
  position: relative;
  z-index: 1; /* 텍스트가 이미지 위에 표시되도록 설정 */
  text-align: center;
  color: black;

  h1 {
    font-size: 66px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    180deg,
    white 0%,
    white 59px,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1; /* 텍스트 위에 배치되지 않도록 설정 */
`;

const TossClone = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header hasShadow={hasShadow}>
        <HeaderWrap>
          <HeaderBox>
            <HeaderLogo>
              <TossLogo />
            </HeaderLogo>
            <HeaderMenu>
              <MenuBox>
                <MenuName>회사 소개</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>공지사항</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>고객센터</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>자주 묻는 질문</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>토스인증서</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>채용</MenuName>
              </MenuBox>
              <MenuBox>
                <LangBox>
                  <MenuName>KOR</MenuName>
                  <span class="css-9hfgjx">|</span>
                  <MenuName>ENG</MenuName>
                </LangBox>
              </MenuBox>
            </HeaderMenu>
          </HeaderBox>
        </HeaderWrap>
      </Header>
      <MainBody>
        <GradientOverlay />
        <MainText>
          <h1>금융의 모든 것</h1>
          <h1>토스에서 쉽고 간편하게</h1>
        </MainText>
      </MainBody>
      <Container />
    </>
  );
};

export default TossClone;
