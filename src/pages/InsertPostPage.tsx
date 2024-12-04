import React from 'react'
import styled from 'styled-components';
import { CategoryWrapper, PostsCategory, PostsContainer, SiteContainer } from './SitePage';

const InsertPostPage = () => {
  return (
    <SiteContainer>
      <PostsContainer>
        <CategoryWrapper>
          <PostsCategory>
            새로운 글쓰기
          </PostsCategory>
          뒤로가기
        </CategoryWrapper>
      </PostsContainer>
    </SiteContainer>
  )
};



export default InsertPostPage;