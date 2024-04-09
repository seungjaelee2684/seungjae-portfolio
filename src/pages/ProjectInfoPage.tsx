import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import * as Game from '../pages/GameStartPage';
import { MdArrowDropDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';
import { projectDto } from '../utils/Projects';
import Information from '../components/ProjectInfoPage/Information';

const ProjectInfoPage = () => {

  const searchParams = new URLSearchParams(window.location.search);
  const dungeonId = Number(searchParams.get("id"));
  const dungeonValue = searchParams.get("dungeon");

  const projectList = projectDto[dungeonId - 1];
  const projectValue = projectList?.game;
  const [infoText, setInfoText] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [startPoint, setStartPoint] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setStartPoint(true);
    }, 3000);

    const interval = setInterval(() => {
      if (!startPoint) return;
      setInfoText(infoText + projectValue[step].content[count]);
      setCount(count + 1);
    }, 30);

    if (count === projectValue[step].content.length) {
      clearInterval(interval);
    };

    return () => {
      clearInterval(interval);
    }
  }, [dungeonId, count, step, startPoint]);

  return (
    <Game.ContentContainer>
      <ProjectImage src={projectDto[dungeonId - 1]?.thumbnail} alt='' />
      <Game.ContentWrapper>
        {dungeonValue}
        <Game.Text>
          {infoText}
          <Game.TypingBar>
            <MdArrowDropDown />
          </Game.TypingBar>
        </Game.Text>
        <Information
          dungeonId={dungeonId}
          dungeonValue={dungeonValue}
          step={step}
          setStep={setStep}
          setInfoText={setInfoText}
          setCount={setCount}/>
      </Game.ContentWrapper>
    </Game.ContentContainer>
  )
};

const ProjectImage = styled(Game.Character)`
  width: 600px;
  user-select: none;
  
  @media screen and (max-width: 1600px) {
    width: 500px;
  }

  @media screen and (max-width: 1320px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 320px;
  }
`;

export default ProjectInfoPage;