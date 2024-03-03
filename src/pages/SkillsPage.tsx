import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InBoxContainer } from './AboutMePage';
import { useDispatch } from 'react-redux';
import { pageMove } from '../store/modules/pageState';
import { skillList } from '../utils/Skills';

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
            {skillList?.map((item: any) => {
              return (
                (item?.mystack)
                  ? <SkillButton>
                    <SkillIcon color={item?.color}>
                      {item?.content}
                    </SkillIcon>
                    {item?.name}
                  </SkillButton>
                  : <SkillButton style={{cursor: "default"}}>
                    <SkillIcon color={item?.color}>
                      <LockedIcon>
                        {item?.content}
                      </LockedIcon>
                    </SkillIcon>
                    {item?.name}
                  </SkillButton>
              )
            })} 
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
  width: calc(100% - 80px);
  height: calc(100% - 100px);
  margin: 30px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  background-image: linear-gradient(to top, #293347b2, #1a1d20b2);

  @media screen and (max-width: 836px) {
    gap: 8px;
  }
`;

const SkillIcon = styled.div<{ color : string }>`
  min-width: 90px;
  min-height: 90px;
  border: 1px solid #d4b681;
  color: ${(props) => props.color};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: 50px;
  overflow: hidden;
  transition: all 0.2s;
  background-image: linear-gradient(to top, #c8a87840, transparent);

  @media screen and (max-width: 1320px) {
    min-width: 60px;
    min-height: 60px;
    font-size: 36px;
  }

  @media screen and (max-width: 836px) {
    min-width: 50px;
    min-height: 50px;
    font-size: 28px;
  }
`;

const SkillButton = styled.div`
  width: 140px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-size: 18px;
  line-height: 110%;
  white-space: pre-line;

  &:hover ${SkillIcon} {
    font-size: 54px;
  }

  @media screen and (max-width: 1320px) {
    width: 95px;
    height: 105px;
    font-size: 14px;
    gap: 8px;

    &:hover ${SkillIcon} {
      font-size: 38px;
    }
  }

  @media screen and (max-width: 836px) {
    width: 92px;
    height: 92px;
    font-size: 14px;

    &:hover ${SkillIcon} {
      font-size: 30px;
    }
  }
`;

const LockedIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000070;
  backdrop-filter: blur(3px);
  font-size: 50px;

  @media screen and (max-width: 1320px) {
    font-size: 36px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 28px;
  }
`;

export default SkillsPage;