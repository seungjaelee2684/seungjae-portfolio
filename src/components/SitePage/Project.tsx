import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';

const Project = () => {
  
  const projectRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(0);
  const slideCount = count * 370;

  useEffect(() => {
    if (!projectRef.current) return;

    projectRef.current.style.transform = `translateX(-${slideCount}px)`;
  }, [count]);

  return (
    <ProjectContainer id="project">
      <TitleContainer>
        <Title onClick={() => setCount(prev => prev + 1)}>
          프로젝트
        </Title>
        <Content>
          {`안녕하세요\n이승재입니다.`}
        </Content>
      </TitleContainer>
      <SlideContainer>
        <CardWrapper ref={projectRef}>
          <CardBox>

          </CardBox>
          <CenterCardBox>

          </CenterCardBox>
          <CardBox>

          </CardBox>
          <CardBox>

          </CardBox>
        </CardWrapper>
      </SlideContainer>
      <BackgroundBox />
    </ProjectContainer>
  )
};

const ProjectContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  padding: 160px 0px;
  gap: 40px;
  color: #222020;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

const Title = styled.h1`
  white-space: pre-line;
  text-align: start;
`;

const Content = styled.p`
  white-space: pre-line;
  text-align: start;
`;

const BackgroundBox = styled.div`
  width: 100vw;
  height: 250px;
  background-color: #2d3275;
  position: absolute;
  bottom: 80px;
  left: 0;
`;

const SlideContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 140px;
  left: 0;
  z-index: 8;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 20px;
  transition: all 0.3s ease-in-out;
`;

const CardBox = styled.div`
  min-width: 350px;
  height: 300px;
  border: 1px solid;
  background-color: white;
  box-sizing: border-box;
`;

const CenterCardBox = styled.div`
  min-width: 350px;
  height: 450px;
  border: 1px solid;
  background-color: white;
  box-sizing: border-box;
`;

export default Project;