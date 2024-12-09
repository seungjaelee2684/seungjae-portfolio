import React from 'react'
import styled from 'styled-components';
import { CategoryWrapper, PostsCategory, PostsContainer } from '../../pages/SitePage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'dompurify';
import '../../styles/contentStyle.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { textLight, textMedium } from '../../styles/colorToken';
import { Editor, EditorList, EditorWrapper, ListLink, DateText } from './ProjectDetail';
import { cookies } from '../../utils/Cookies';
import { supabase } from '../../utils/Supabase';
import { koreaTime } from '../../utils/KoreaTime';
import { onClickPostDeleteHandler } from '../../utils/ClickHandler';

interface PracticeDetailProps {
  data: any;
};

const PracticeDetail = ({ data }: PracticeDetailProps) => {

  const parser = new DOMParser();
  const theme = useSelector((state: RootState) => state.darkMode);
  const content = data?.content!;
  const decodedString = parser.parseFromString(content, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);

  return (
    <PostsContainer>
      <PracticeTitleWrapper>
        <PracticeCategory>
          {data?.category}
        </PracticeCategory>
        <CategoryWrapper
          style={{
            borderBottom: '1px solid #adadad',
            paddingBottom: '12px'
          }}>
          <PostsCategory>
            {data?.title}
          </PostsCategory>
          <EditorWrapper $color={textLight[theme]}>
            <DateText>
              {koreaTime(data?.created_at)}
              <ListLink
                href='/jaelog/projects'
                $color={textMedium[theme]}>
                목록
              </ListLink>
            </DateText>
            {(cookies())
              && <EditorList>
                <ListLink
                  href={`/jaelog/practices/update/${data?.id}`}
                  $color={textMedium[theme]}>
                  수정
                </ListLink>
                /
                <Editor
                  onClick={() => onClickPostDeleteHandler(data?.category, data?.id, 'practices', 'category')}
                  $color={textMedium[theme]}>
                  삭제
                </Editor>
              </EditorList>}
          </EditorWrapper>
        </CategoryWrapper>
      </PracticeTitleWrapper>
      {(data) && <Content dangerouslySetInnerHTML={{ __html: contentHtml }} />}
    </PostsContainer>
  )
};

const Content = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 60px;
`;

const PracticeTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
`;

const PracticeCategory = styled.span`
  font-size: 16px;
  color: #ee6e6e;
`;

export default PracticeDetail;