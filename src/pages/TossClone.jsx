import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../img/토스헤더.png";

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
      <Container />
    </>
  );
};

export default TossClone;
