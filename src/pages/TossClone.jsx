import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;

const Header = styled.div`
  width: 100%;
  height: 59px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid transparent;
  transition: border-color 0.1s ease;
  border-color: ${({ hasShadow }) => (hasShadow ? "#e6e6e6" : "transparent")};
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
      <Header hasShadow={hasShadow}></Header>
      <Container />
    </>
  );
};

export default TossClone;
