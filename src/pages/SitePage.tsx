import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Banner from '../components/SitePage/Banner';
import About from '../components/SitePage/About';
import Background1 from '../assets/images/portfolioBG.jpg';
import Background2 from '../assets/images/start_back.jpg';
import { BsArrow90DegRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';

const SitePage = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<any>([]);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEvent = () => {
      if (!headerRef.current) return;

      let scrolly = window.scrollY;

      if (scrolly >= 300) {
        headerRef.current.style.backdropFilter = "blur(3px)";
        headerRef.current.style.backgroundColor = "#ffffffb";
      } else {
        headerRef.current.style.backdropFilter = "none";
        headerRef.current.style.backgroundColor = "transparent";
      };
    };

    if (!aboutRef.current || !infoRef.current) return;

    const callback2 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (!navRef.current) return;
        if (entry.isIntersecting) {
          navRef.current.style.color = `#222020`;
        } else {
          navRef.current.style.color = `#fefefea6`;
        };
      });
    };

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          console.log("true");
          entry.target.style.opacity = `1`;
          entry.target.style.transform = `translateY(0px)`;
        } else {
          console.log("false");
          // entry.target.style.opacity = `0`;
          // entry.target.style.transform = `translateY(-30px)`;
        };
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }

    const observer = new IntersectionObserver(callback, options);
    const observer2 = new IntersectionObserver(callback2, options);

    aboutRef.current.forEach((element: any) => {
      if (!element) return;
      observer.observe(element);
    });
    observer2.observe(infoRef.current);

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
      if (!aboutRef.current || !infoRef.current) return;
      aboutRef.current.forEach((element: any) => {
        if (!element) return;
        observer.unobserve(element);
      });
      observer2.unobserve(infoRef.current);
    }
  }, []);

  return (
    <MainLayout>
      <WebHeader headerRef={headerRef} navRef={navRef} />
      <MainBackground src={Background1}>
        <MainTitleContainer>
          <MainTitleWrapper>
            <MainTitle>
              아름다운 헌신
            </MainTitle>
            <MainTitle>
              성장하는 실력
            </MainTitle>
          </MainTitleWrapper>
          <BarContainer />
          <SubTitle>
            새하얀 도화지와 같은 개발자
            <ContactBtn>
              섭외하기
              <GoArrowUpRight />
            </ContactBtn>
          </SubTitle>
        </MainTitleContainer>
      </MainBackground>
      <MainContainer ref={infoRef}>
        <About aboutRef={aboutRef} navRef={navRef} />
      </MainContainer>
      <MainBackground src={Background2} />
    </MainLayout>
  )
};

const TitleAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const BarAppear = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const MainLayout = styled.article`
  width: 100%;
  position: relative;
  font-family: "TTLaundryGothicB";
  font-size: 400;
`;

const MainBackground = styled.div<{ src: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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

const MainTitleContainer = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1320px) {
    width: 96%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 40px;
  }
`;

const MainTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

const MainTitle = styled.div`
  min-width: fit-content;
  color: #FEFEFE;
  font-size: 55px;
  user-select: none;
  opacity: 0;
  animation: ${TitleAppear} 1s forwards;

  @media screen and (max-width: 1320px) {
    font-size: 40px;
  }
`;

const BarContainer = styled.line`
  width: 300px;
  height: 1px;
  background-color: #fefefe74;
  animation: ${BarAppear} 1s forwards 0.3s;
  opacity: 0;

  @media screen and (max-width: 1320px) {
    width: 100%;
  }
`;

const SubTitle = styled(MainTitle)`
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 20px;
  opacity: 0;
  animation: ${TitleAppear} 1.5s forwards 0.8s;

  @media screen and (max-width: 1320px) {
    align-items: start;
  }
`;

const ContactBtn = styled.button`
  width: 140px;
  height: 44px;
  outline: none;
  border: none;
  background-color: #FEFEFE;
  border-radius: 30px;
  font-size: 14px;
  font-family: "TTLaundryGothicB";
  font-size: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: all 0.3s;
  opacity: 0;
  animation: ${TitleAppear} 1.3s forwards 1s;
  cursor: pointer;

  &:hover {
    background-color: #2d2864;
    color: #FEFEFE;
    font-size: 15px;
  }
`;

export default SitePage;