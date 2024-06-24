import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';

const Project = () => {

  const [count, setCount] = useState<number>(0);
  const num = [0, 1, 2];

  return (
    <ProjectContainer id="project">
      <TitleContainer>
        <Title onClick={() => {
          if (count >= 2) {
            setCount(0);
          } else {
            setCount(prev => prev + 1);
          };
        }}>
          프로젝트
        </Title>
        <Content>
          {`안녕하세요\n이승재입니다.`}
        </Content>
      </TitleContainer>
      <CardWrapper>
        {num.map((item: any, index: number) => {
          return (
            <CardBox key={index} style={{
              minWidth: `${(count === index) ? "400px" : "300px"}`,
              height: `${(count === index) ? "350px" : "250px"}`
            }}>

            </CardBox>
          )
        })}
      </CardWrapper>
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
  justify-content: space-between;
  align-items: start;
  position: relative;
  padding: 40px 0px;
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
  height: 100px;
  background-color: #2d3275;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 40px;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 80px;
  left: 0;
`;

const CardBox = styled.div`
  min-width: 400px;
  height: 300px;
  border: 1px solid;
  background-color: white;
  box-sizing: border-box;
  transition: all 0.4s ease-out;
`;

export default Project;