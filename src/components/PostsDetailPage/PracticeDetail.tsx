import React from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer } from '../../pages/SitePage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'dompurify';
import '../../styles/contentStyle.css';

interface PracticeDetailProps {
  data: any;
};

const PracticeDetail = ({ data }: PracticeDetailProps) => {

  const parser = new DOMParser();
  const content = data?.content!;
  const decodedString = parser.parseFromString(content, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);

  return (
    <PostsContainer>
      <PostsCategory>
        {data?.title}
      </PostsCategory>
      {(data) && <Content dangerouslySetInnerHTML={{ __html: contentHtml }} />}
    </PostsContainer>
  )
};

const Content = styled.div`
  width: 100%;
  text-align: start;
`;

export default PracticeDetail;