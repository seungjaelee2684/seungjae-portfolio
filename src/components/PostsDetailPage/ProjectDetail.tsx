import React from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer } from '../../pages/SitePage';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DOMPurify from 'dompurify';
import '../../styles/contentStyle.css';

interface ProjectDetailProps {
  data: any;
  stack: any;
};

const ProjectDetail = ({ data, stack }: ProjectDetailProps) => {

  const parser = new DOMParser();
  const content = data?.content!;
  const decodedString = parser.parseFromString(content, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);

  return (
    <PostsContainer>
      <PostsCategory>
        {data?.title}
      </PostsCategory>
      <ContentLane>
        <ContentCategory>
          이름
        </ContentCategory>
        <ContentSentence>
          {data?.title}
        </ContentSentence>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          기간
        </ContentCategory>
        <ContentSentence>
          {data?.start_date} ~ {data?.end_date}
        </ContentSentence>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          설명
        </ContentCategory>
        <ContentSentence>
          {data?.description}
        </ContentSentence>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          링크
        </ContentCategory>
        <UrlLink href={data?.url} target='_blank'>
          <LinkIcon>
            <FaArrowUpRightFromSquare />
          </LinkIcon>
          {data?.url}
        </UrlLink>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          소속
        </ContentCategory>
        <ContentSentence>
          {data?.connection}
        </ContentSentence>
        <ContentCategory>
          인원수
        </ContentCategory>
        <ContentSentence>
          {data?.member} 명
        </ContentSentence>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          직무
        </ContentCategory>
        <ContentSentence>
          {data?.role}
        </ContentSentence>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          기술스택
        </ContentCategory>
        <StackWrapper>
          {stack?.map((item: any, index: number) =>
            <StackList
              key={index}
              $color={item?.color}>
              <StackIcon
                dangerouslySetInnerHTML={{
                  __html: item?.icon.replace('<svg', `<svg fill=#ffffff`)
                }}
                role="img"
                aria-label={`Icon for ${item?.stack}`} />
              {item?.stack}
            </StackList>
          )}
        </StackWrapper>
      </ContentLane>
      <ContentLane>
        <ContentCategory>
          담당업무
        </ContentCategory>
        <ContentSentence>
          {data?.work}
        </ContentSentence>
      </ContentLane>
      <ContentLane style={{ borderBottom: 'none' }}>
        {(data) && <ContentSentence dangerouslySetInnerHTML={{ __html: contentHtml }} />}
      </ContentLane>
    </PostsContainer>
  )
};

const ContentLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 30px;
  padding: 32px 0px;
  border-bottom: 1px solid #e9e9e9;
`;

const ContentCategory = styled.span`
  min-width: 90px;
  width: 90px;
  padding: 5px 0px;
  border-radius: 20px;
  color: #ee6e6e;
  border: 1px solid #ee6e6e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
`;

const ContentSentence = styled.p`
  width: 100%;
  text-align: start;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
`;

const UrlLink = styled.a`
  width: fit-content;
  text-align: start;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
    text-decoration: underline;
  }
`;

const LinkIcon = styled.span`
  font-size: 14px;
  margin-right: 6px;
`;

const StackWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
  flex-wrap: wrap;
`;

const StackList = styled.li<{ $color: string }>`
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  background-color: ${(props) => props.$color};
  color: #ffffff;
  border: 1px solid;
  border-radius: 20px;
  user-select: none;
`;

const StackIcon = styled.div`
  width: 20px;
  height: 20px;
`;

export default ProjectDetail;