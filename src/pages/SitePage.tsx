import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Banner from '../components/SitePage/Banner';
import About from '../components/SitePage/About';
import Background1 from '../assets/images/portfolioBG.jpg';
import Background2 from '../assets/images/backgroundWeb.jpg';
import { BsArrow90DegRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';
import Project from '../components/SitePage/Project';

const SitePage = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const scrollEvent = () => {
      let scrolly = window.scrollY;
      let viewport = window.innerHeight;

      console.log(scrolly, viewport);
      if (scrolly > viewport) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      };
    };

    if (!infoRef.current) return;

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    }
  }, []);

  return (
    <MainLayout>
      <WebHeader headerRef={headerRef} isScroll={isScroll} />
      <MainBackground src={Background1}>
        <MainTitleContainer>
          <MainTitleWrapper>
            <MainTitle>
              끊임없는 헌신
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
        <TextContent>
          <Box />
          React와 Typescript에 장점을 둔 높은 성장이 기대되는 개발자. 끊임없는 자기 계발과 문제 해결에 대한 열정으로 프로젝트 및 IT 교육 과정의 경험을 통해 빠르게 성장 중에 있으며, 실제 웹 서비스를 운영하면서 사용자 중심의 솔루션을 개발하는 경험을 쌓으며, 가치 있는 개발자로 발전해 나가고 있습니다.
        </TextContent>
      </MainBackground>
      <MainContainer ref={infoRef}>
        <About />
        <Project />
      </MainContainer>
      <MainBackground id="contact" src={Background2} />
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

const TextAppear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  color: #FEFEFE;
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

const TextContent = styled.p`
  width: 1320px;
  text-align: start;
  font-size: 16px;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 16px;
  font-family: "";
  font-weight: 500;
  opacity: 0;
  animation: ${TextAppear} 1.3s forwards 1.5s;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const Box = styled.div`
  min-width: 6px;
  height: 6px;
  background-color: #FEFEFE;
  margin-top: 10px;
`;

export default SitePage;