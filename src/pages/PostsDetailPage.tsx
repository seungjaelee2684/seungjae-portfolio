import React from 'react'
import styled from 'styled-components';
import { PostsContainer, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { useParams } from 'react-router-dom';

const PostsDetailPage = () => {

  const { post, postId } = useParams();
  console.log(post, postId);

  return (
    <SiteContainer>
      <SideTap />
      <PostsContainer>
        
      </PostsContainer>
    </SiteContainer>
  )
};

export default PostsDetailPage;