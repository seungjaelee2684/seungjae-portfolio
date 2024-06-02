import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Banner from '../components/SitePage/Banner';
import About from '../components/SitePage/About';
import Background1 from '../assets/images/main_background.webp';
import Background2 from '../assets/images/start_back.jpg';

const SitePage = () => {

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEvent = () => {
      let scrolly = window.scrollY;

      if (!headerRef.current) return;

      if (scrolly >= 300) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backdropFilter = "blur(3px)";
        // headerRef.current.style.backgroundColor = "#222020";
      } else {
        headerRef.current.style.position = "absolute";
        // headerRef.current.style.backgroundColor = "transparent";
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
      <MainBackground src={Background1} />
      <MainContainer>
        <About />
      </MainContainer>
      <MainBackground src={Background2} />
    </MainLayout>
  )
};

const MainLayout = styled.article`
  width: 100%;
  position: relative;
  font-family: "TTLaundryGothicB";
  font-size: 400;
  background-color: #222020;
`;

const MainBackground = styled.div<{ src: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const MainContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
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