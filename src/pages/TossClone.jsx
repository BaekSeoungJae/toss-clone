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
  justify-content: center;
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
            <HeaderMenu></HeaderMenu>
          </HeaderBox>
        </HeaderWrap>
      </Header>
      <Container />
    </>
  );
};

export default TossClone;
