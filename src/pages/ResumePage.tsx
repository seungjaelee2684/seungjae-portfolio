import React from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';

const ResumePage = () => {
  return (
    <SiteContainer>
      <SideTap />
      <PostsContainer>
        <PostsCategory>
          내 소개
        </PostsCategory>
      </PostsContainer>
    </SiteContainer>
  )
};

export default ResumePage;