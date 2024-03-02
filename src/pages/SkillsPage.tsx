import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InBoxContainer } from './AboutMePage';
import { useDispatch } from 'react-redux';
import { pageMove } from '../store/modules/pageState';

const SkillsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageMove("Skills"));
  }, []);

  return (
    <InBoxContainer>
      <SkillsLayout>
        <LeftContainer>

        </LeftContainer>
        <RightContainer>
          <SkillsListWrapper>
            SkillsPage
          </SkillsListWrapper>
        </RightContainer> 
      </SkillsLayout>
    </InBoxContainer>
  )
};

const SkillsLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.section`
  width: 50%;
  height: 100%;
`;

const RightContainer = styled.section`
  width: 50%;
  height: 100%;
`;

const SkillsListWrapper = styled.div`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(to top, #293347b2, #1a1d20b2);
`;

export default SkillsPage;