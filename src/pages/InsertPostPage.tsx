import React, { useState } from 'react'
import styled from 'styled-components';
import { CategoryWrapper, PostsCategory, PostsContainer, SiteContainer } from './SitePage';

const InsertPostPage = () => {

  const [insertData, setInsertData] = useState<{
    title: string
  }>({
    title: ''
  });
  const { title } = insertData;

  const onChangeInsertHandler = (e: any) => {
    const { name, value } = e.target;
    setInsertData({
      ...insertData,
      [name]: value
    });
  };

  return (
    <SiteContainer>
      <InsertContainer>
        <InsertTitleWrapper>
          <InsertTitle>
            새로운 글쓰기
          </InsertTitle>
        </InsertTitleWrapper>
        <InsertFormContainer>
          <FormLane>
            <Expired>
              제목
              <Important>
                *
              </Important>
            </Expired>
            <LaneInput
              $width='50%'
              name='title'
              value={title}
              onChange={onChangeInsertHandler} />
          </FormLane>
        </InsertFormContainer>
      </InsertContainer>
    </SiteContainer>
  )
};

const InsertContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
`;

const InsertTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsertTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const InsertFormContainer = styled.form`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const FormLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
`;

const Expired = styled.label`
  min-width: 100px;
  width: 100px;
  height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 700;
`;

const Important = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #ee6e6e;
`;

const LaneInput = styled.input<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 32px;
  padding: 0px 12px;
  border: 1px solid #b8b8b8;
  outline: none;
  font-size: 16px;
  border-radius: 4px;

  &::placeholder {
    color: #b8b8b8;
  }

  &:hover {
    border: 1px solid #525050;
  }

  &:focus {
    border: 1px solid #ee6e6e;
  }
`;

export default InsertPostPage;