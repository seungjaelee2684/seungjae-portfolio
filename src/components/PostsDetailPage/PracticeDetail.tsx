import React from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer } from '../../pages/SitePage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PracticeDetailProps {
  data: any;
};

const PracticeDetail = ({ data }: PracticeDetailProps) => {

  const markdown = data?.content || '';

  return (
    <PostsContainer>
      <PostsCategory>
        {data?.title}
      </PostsCategory>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </PostsContainer>
  )
};

export default PracticeDetail;