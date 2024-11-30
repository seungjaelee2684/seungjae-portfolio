import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { commonTextColor, textLight } from '../../styles/colorToken';
import { PostsCategory } from '../../pages/SitePage';

interface SideTapProps {
  data?: any;
  param?: any;
};

const SideTap = ({ data, param }: SideTapProps) => {

  const theme = useSelector((state: RootState) => state.darkMode);

  return (
    <SideTapContainer>
      <PostsCategory>
        Tags
      </PostsCategory>
      {data?.map((item: any, index: number) =>
        <SideTapLane key={index}>
          <SideTapLink
            href={`/jaelog/${param}/${item?.id}`}
            $color={commonTextColor[theme]}>
            {item?.name}
          </SideTapLink>
        </SideTapLane>
      )}
    </SideTapContainer>
  )
};

const SideTapContainer = styled.ul`
  min-width: 180px;
  width: 180px;
  min-height: 100dvh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-right: 1px solid #e9e9e9;
  padding-top: 40px;
`;

const SideTapLane = styled.li`
  width: 100%;
  height: 34px;
`;

const SideTapLink = styled.a<{ $color: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 16px 0px 0px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }
`;

export default SideTap;