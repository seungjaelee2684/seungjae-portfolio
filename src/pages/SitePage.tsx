import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Banner from '../components/SitePage/Banner';
import About from '../components/SitePage/About';

const SitePage = () => {

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEvent = () => {
      let scrolly = window.scrollY;

      if (!headerRef.current) return;

      if (scrolly >= 300) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "#222020";
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
      };
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    }
  }, []);

  return (
    <MainLayout>
      <WebHeader headerRef={headerRef} />
      <Banner />
      <MainContainer>
        <About />
      </MainContainer>
    </MainLayout>
  )
};

const MainLayout = styled.article`
  width: 100%;
  position: relative;
  font-family: "TTLaundryGothicB";
  font-size: 400;
`;

const MainContainer = styled.div`
  width: 1320px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

export default SitePage;