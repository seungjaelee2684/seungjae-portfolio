import React from 'react'
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";

const Category = () => {
  return (
    <CategoryWrapper>
      <li>
        <IconBox href='https://github.com/seungjaelee2684' target='_blank'>
          <FaGithub />
        </IconBox>
      </li>
      <li>
        <CategoryButton href='/jaelog/resume'>
          소개글
        </CategoryButton>
      </li>
      <li>
        <CategoryButton href='/jaelog/projects'>
          프로젝트
        </CategoryButton>
      </li>
      <li>
        <CategoryButton href='/jaelog/practices'>
          공부
        </CategoryButton>
      </li>
    </CategoryWrapper>
  )
};

const CategoryWrapper = styled.ul`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  user-select: none;
  border-bottom: 1px solid #e2e2e2;
`;

const IconBox = styled.a`
  height: 30px;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: 60px;
  cursor: pointer;
`;

const CategoryButton = styled.a`
  width: fit-content;
  padding: 4px 24px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ecc3c3;
  color: #ee6e6e;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid #ee6e6e;
    color: #b43333;
  }
`;

export default Category;