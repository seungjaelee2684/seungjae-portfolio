import React, { useState } from 'react'
import styled from 'styled-components';
import { CategoryWrapper, PostsCategory, PostsContainer } from '../../pages/SitePage';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DOMPurify from 'dompurify';
import '../../styles/contentStyle.css';
import { cookies } from '../../utils/Cookies';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { textLight, textMedium } from '../../styles/colorToken';
import { supabase } from '../../utils/Supabase';
import { koreaTime } from '../../utils/KoreaTime';
import { useNavigate } from 'react-router-dom';
import { onClickPostDeleteHandler } from '../../utils/ClickHandler';
import Image from '../../assets/images/ALDDALDDAL/ALDDALDDAL.png';
import { projectImage } from '../../utils/ProjectImage';
import ImageModal from './ImageModal';

interface ProjectDetailProps {
  data: any;
  stack: any;
};

const ProjectDetail = ({ data, stack }: ProjectDetailProps) => {

  const [img, setImg] = useState<any>(null);

  const parser = new DOMParser();
  const theme = useSelector((state: RootState) => state.darkMode);
  const content = data?.content!;
  const decodedString = parser.parseFromString(content, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);

  return (
    <PostsContainer>
      {(img) && <ImageModal img={img} setImg={setImg} src={data?.image} />}
      <CategoryWrapper>
        <PostsCategory>
          {data?.title}
        </PostsCategory>
        <EditorWrapper $color={textLight[theme]}>
          <DateText>
            {koreaTime(data?.created_at)}
            <ListLink
              href={`/jaelog/projects?c=${data?.connection}`}
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
                onClick={() => onClickPostDeleteHandler(data?.connection, data?.id, 'projects', 'connection')}
                $color={textMedium[theme]}>
                삭제
              </Editor>
            </EditorList>}
        </EditorWrapper>
      </CategoryWrapper>
      {(projectImage[data?.image])
        && <ImageContainer
          src={projectImage[data?.image]}
          alt='이미지'
          loading="lazy"
          onClick={() => setImg(data?.image)} />}
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
          개발인원
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

export const EditorWrapper = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  margin-top: 16px;
  color: ${(props) => props.$color};

  @media screen and (max-width: 1140px) {
    margin-top: 0px;
    gap: 4px;
  }
`;

export const EditorList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
  font-size: 13px;

  @media screen and (max-width: 1140px) {
    font-size: 8px;
  }
`;

export const Editor = styled.button<{ $color: string }>`
  outline: none;
  border: none;
  color: ${(props) => props.$color};
  background-color: transparent;
  transition: all 0.3s;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 8px;
  }
`;

export const DateText = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  font-size: 14px;
  letter-spacing: -0.3px;

  @media screen and (max-width: 1140px) {
    font-size: 12px;
    gap: 8px;
  }
`;

export const ListLink = styled.a<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: all 0.3s;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 13px;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  margin-top: 60px;
  margin-bottom: 30px;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 1140px) {
    height: 100px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const ContentLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 30px;
  padding: 32px 0px;
  border-bottom: 1px solid #e9e9e9;

  @media screen and (max-width: 1140px) {
    gap: 10px;
    padding: 12px 0px;
  }
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

  @media screen and (max-width: 1140px) {
    min-width: 50px;
    width: 50px;
    font-size: 9px;
    padding: 3px 0px;
  }
`;

const ContentSentence = styled.p`
  width: 100%;
  text-align: start;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;

  @media screen and (max-width: 1140px) {
    font-size: 10px;
    line-height: 160%;
  }
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

  @media screen and (max-width: 1140px) {
    font-size: 10px;
    line-height: 160%;
  }
`;

const LinkIcon = styled.span`
  font-size: 14px;
  margin-right: 6px;

  @media screen and (max-width: 1140px) {
    font-size: 10px;
    margin-right: 4px;
  }
`;

const StackWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
  flex-wrap: wrap;
  padding-left: 0px;

  @media screen and (max-width: 1140px) {
    gap: 4px;
  }
`;

const StackList = styled.li<{ $color: string }>`
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  margin-left: 0px;
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

  @media screen and (max-width: 1140px) {
    height: 20px;
    padding: 0px 8px;
    font-size: 8px;
  }
`;

const StackIcon = styled.div`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 1140px) {
    width: 10px;
    height: 10px;
  }
`;

export default ProjectDetail;