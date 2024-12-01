import React from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer } from '../../pages/SitePage';

interface PracticeDetailProps {
  data: any;
};

const PracticeDetail = ({ data }: PracticeDetailProps) => {
  return (
    <PostsContainer>
      <PostsCategory>
        {data?.name}
      </PostsCategory>
    </PostsContainer>
  )
};

export default PracticeDetail;