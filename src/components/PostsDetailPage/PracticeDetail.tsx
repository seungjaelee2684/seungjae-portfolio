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

interface PracticeDetailProps {
  data: any;
};

const PracticeDetail = ({ data }: PracticeDetailProps) => {

  const parser = new DOMParser();
  const theme = useSelector((state: RootState) => state.darkMode);
  const content = data?.content!;
  const decodedString = parser.parseFromString(content, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);
  console.log(koreaTime);

  const onClickDeleteHandler = () => {
    const deleteFetch = async () => {
      if (!data) return;
      try {
        const { error } = await supabase
          .from('practices')
          .delete()
          .eq('id', data?.id);

        if (error) throw error;
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error)
      };
    };

    const isDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (isDelete) deleteFetch();
  };

  return (
    <PostsContainer>
      <CategoryWrapper>
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
                href={`/jaelog/projects/update/${data?.id}`}
                $color={textMedium[theme]}>
                수정
              </ListLink>
              /
              <Editor
                onClick={onClickDeleteHandler}
                $color={textMedium[theme]}>
                삭제
              </Editor>
            </EditorList>}
        </EditorWrapper>
      </CategoryWrapper>
      {(data) && <Content dangerouslySetInnerHTML={{ __html: contentHtml }} />}
    </PostsContainer>
  )
};

const Content = styled.div`
  width: 100%;
  text-align: start;
`;

export default PracticeDetail;