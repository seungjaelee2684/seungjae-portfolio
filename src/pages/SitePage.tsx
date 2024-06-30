import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Skill from '../components/SitePage/Skill';
import About from '../components/SitePage/About';
import Background1 from '../assets/images/portfolioBG.jpg';
import { BsArrow90DegRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';
import Project from '../components/SitePage/Project';
import { BsBoxArrowUpRight } from "react-icons/bs";
import Contact from '../components/SitePage/Contact';

const SitePage = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const outWrapperRef = useRef<HTMLDivElement>(null);
  const [scrollValue, setScrollValue] = useState<number>(1);
  console.log("🚀 ~ SitePage ~ scrollValue:", scrollValue)

  const onClickMoveHandler = (id: number) => {
    setScrollValue(id);
  };

  useEffect(() => {
    if (!outWrapperRef.current) return;

    let { scrollTop } = outWrapperRef.current;
    let pageHeight = window.innerHeight;

    scrollValue === 1 && outWrapperRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    scrollValue === 2 && outWrapperRef.current.scrollTo({ top: pageHeight, left: 0, behavior: "smooth"});
    scrollValue === 3 && outWrapperRef.current.scrollTo({ top: pageHeight * 2, left: 0, behavior: "smooth"});
    scrollValue === 4 && outWrapperRef.current.scrollTo({ top: pageHeight * 3, left: 0, behavior: "smooth"});
    scrollValue === 5 && outWrapperRef.current.scrollTo({ top: pageHeight * 4, left: 0, behavior: "smooth"});

    const scrollEvent = (e: any) => {
      e.preventDefault();
      if (!outWrapperRef.current) return;
      let { deltaY } = e;
      let { scrollTop } = outWrapperRef.current
      let pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지 down");
          outWrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지 down");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지 down");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(4);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          console.log("현재 4페이지 down");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(5);
        } else {
          console.log("현재 5페이지 down");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(5);
        };
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지 up");
          outWrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지 up");
          outWrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지 up");
          outWrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(2);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          console.log("현재 4페이지 up");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(3);
        } else {
          console.log("현재 5페이지 up");
          outWrapperRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: 'smooth'
          });
          setScrollValue(4);
        } ;
      };
    };

    outWrapperRef.current.addEventListener("wheel", scrollEvent);

    return () => {
      if (!outWrapperRef.current) return;
      outWrapperRef.current.removeEventListener("wheel", scrollEvent);
    }
  }, [scrollValue]);

  return (
    <MainLayout ref={outWrapperRef}>
      <WebHeader headerRef={headerRef} scrollValue={scrollValue} setScrollValue={setScrollValue} onClickMoveHandler={onClickMoveHandler} />
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
          <SubTitleWrapper>
            <SubTitle>
              새하얀 도화지와 같은 개발자
            </SubTitle>
            <ContactBtn onClick={() => onClickMoveHandler(5)}>
              섭외하기
              <GoArrowUpRight />
            </ContactBtn>
          </SubTitleWrapper>
        </MainTitleContainer>
        <TextContent>
          <Box />
          React와 Typescript에 장점을 둔 높은 성장이 기대되는 개발자. 끊임없는 자기 계발과 문제 해결에 대한 열정으로 프로젝트 및 IT 교육 과정의 경험을 통해 빠르게 성장 중에 있으며, 실제 웹 서비스를 운영하면서 사용자 중심의 솔루션을 개발하는 경험을 쌓으며, 가치 있는 개발자로 발전해 나가고 있습니다.
        </TextContent>
        <NavContainer>
          <NavWrapper>
            <NavButton onClick={() => onClickMoveHandler(2)}>
              ABOUT
              <BsBoxArrowUpRight size={18} style={{ marginBottom: "6px" }} />
            </NavButton>
            <NavButton onClick={() => onClickMoveHandler(3)}>
              SKILL
              <BsBoxArrowUpRight size={18} style={{ marginBottom: "6px" }} />
            </NavButton>
            <NavButton onClick={() => onClickMoveHandler(4)}>
              PROJECT
              <BsBoxArrowUpRight size={18} style={{ marginBottom: "6px" }} />
            </NavButton>
            <NavButton onClick={() => onClickMoveHandler(5)}>
              CONTACT
              <BsBoxArrowUpRight size={18} style={{ marginBottom: "6px" }} />
            </NavButton>
          </NavWrapper>
        </NavContainer>
      </MainBackground>
      <MainContainer ref={infoRef}>
        <About />
        <Skill />
        <Project />
      </MainContainer>
      <Contact />
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
  height: 100vh;
  position: relative;
  font-family: "TTLaundryGothicB";
  font-size: 400;
  overflow-y: auto;
  overflow-x: hidden;
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
  position: relative;
`;

const MainContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  @media screen and (max-width: 500px) {
    font-size: 28px;
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

const SubTitleWrapper = styled(MainTitle)`
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 20px;

  @media screen and (max-width: 1320px) {
    align-items: start;
  }
`;

const SubTitle = styled.div`
  font-size: 55px;
  opacity: 0;
  animation: ${TitleAppear} 1.5s forwards 0.8s;
  
  @media screen and (max-width: 1320px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
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
  animation: ${TextAppear} 1.3s forwards 1s;
  cursor: pointer;

  &:hover {
    background-color: #2d2864;
    color: #FEFEFE;
    font-size: 15px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 12px;
    width: 100px;
    height: 38px;

    &:hover {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 9px;
    width: 90px;
    height: 30px;

    &:hover {
      font-size: 9px;
    }
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
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const Box = styled.div`
  min-width: 6px;
  height: 6px;
  background-color: #FEFEFE;
  margin-top: 10px;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #22202081;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const NavWrapper = styled.nav`
  width: 1320px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const NavButton = styled.a`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #FEFEFE;
  background-color: #222020bb;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    background-color: #625d5d88;
  }
`;

export default SitePage;