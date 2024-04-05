import React from 'react'
import styled from 'styled-components';
import * as Contact from '../GameStartPage/Contact';
import { MdArrowRight } from 'react-icons/md';
import { projectDto } from '../../utils/Projects';
import { useNavigate } from 'react-router-dom';

interface InformationProps {
  dungeonId: number;
  dungeonValue: string | null;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setInfoText: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Information: React.FC<InformationProps> = ({ dungeonId, dungeonValue, step, setStep, setInfoText, setCount }) => {

  const navigate = useNavigate();
  const guide = localStorage.getItem("guide");

  return (
    <Contact.ContactContainer>
      {projectDto[dungeonId - 1]?.game.map((item: any, index: number) => {
        return (
          <Contact.LaneContainer
            key={item?.id}
            onClick={() => {
              setInfoText("");
              setCount(0);
              setStep(index);
            }}>
            {(step === index)
              ? <SelectedIcon>
                <MdArrowRight />
              </SelectedIcon>
              : <Contact.Icon>
                <MdArrowRight />
              </Contact.Icon>}
            {item?.id}
          </Contact.LaneContainer>
        )
      })}
      <Contact.LaneContainer
        onClick={() => {
          if (guide) {
            localStorage.removeItem("guide");
          };
          navigate(`/gamestart?dungeon=${dungeonValue}`);
        }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        다음으로 넘어가기
      </Contact.LaneContainer>
      <Contact.LaneContainer
        onClick={() => {
          if (guide) {
            localStorage.setItem("guide", "dungeon");
          };
          navigate("/dungeon");
        }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        뒤로 가기
      </Contact.LaneContainer>
    </Contact.ContactContainer>
  )
};

const SelectedIcon = styled(Contact.Icon)`
  opacity: 1;
`;

export default Information;