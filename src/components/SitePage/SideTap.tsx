import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { commonTextColor, textLight } from '../../styles/colorToken';

const SideTap = () => {

  const theme = useSelector((state: RootState) => state.darkMode);

  return (
    <SideTapContainer>
      <SideTapLane>
        <SideTapLink
          $color={commonTextColor[theme]}
          $hover={textLight[theme]}>
          여기 링크
        </SideTapLink>
      </SideTapLane>
    </SideTapContainer>
  )
};

const SideTapContainer = styled.ul`
  min-width: 160px;
  width: 160px;
  min-height: 100dvh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-right: 1px solid #e9e9e9;
  padding-top: 40px;
`;

const SideTapLane = styled.li`
  width: 100%;
  height: 34px;
`;

const SideTapLink = styled.a<{ $color: string, $hover: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px 16px;
  font-size: 16px;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.$hover};
  }
`;

export default SideTap;