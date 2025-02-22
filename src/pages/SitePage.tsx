import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteHeader from '../components/SitePage/SiteHeader';
import SideTap from '../components/SitePage/SideTap';
import { supabase } from '../utils/Supabase';
import Profile from '../components/SitePage/Profile';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';
import { commonTextColor } from '../styles/colorToken';
import { categoryObj, sideTapList } from '../utils/Category';
import { cookies, visitCookie } from '../utils/Cookies';
import { BsPencilSquare } from "react-icons/bs";
import { onClickPostDeleteHandler } from '../utils/ClickHandler';
import { koreaDate } from '../utils/KoreaTime';

const SitePage = () => {

  const theme = useSelector((state: RootState) => state.darkMode);

  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, practice] = await Promise.all([
          supabase.from('projects').select('id, title, created_at, type, connection').order('created_at', { ascending: false }).limit(10),
          supabase.from('practices').select('id, title, created_at, type, category').order('created_at', { ascending: false }).limit(10),
        ]);

        if (project.error) throw project.error;
        if (practice.error) throw practice.error;

        const combinedData = [...project?.data, ...practice?.data];
        const sortedData = combinedData
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 10);

        setBlogData(sortedData);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  }, []);

  return (
    <SiteContainer>
      <SideTap />
      <PostsContainer>
        <CategoryWrapper>
          <PostsCategory>
            최근 글
          </PostsCategory>
          {(cookies())
            && <InsertButton href='/jaelog/insert'>
              <BsPencilSquare />
              글쓰기
            </InsertButton>}
        </CategoryWrapper>
        {blogData?.map((item: any, index: any) =>
          <PostsLaneContainer key={index}>
            <PostsLane href={`/jaelog/${item?.type}/${item?.id}`}>
              <PostLaneCategory>
                # {categoryObj[item?.type]}
              </PostLaneCategory>
              <TitleLane>
                <PostTitle>
                  {item?.title}
                </PostTitle>
                <PostDate>
                  {koreaDate(item?.created_at)}
                </PostDate>
                {(cookies())
                  && <AdminButtonWrapper>
                    <AdminButton
                      $color={commonTextColor[theme]}
                      onClick={(e: any) => {
                        e.preventDefault();
                        window.location.href = `/jaelog/${item?.type}/update/${item?.id}`;
                      }}>
                      <FaPenToSquare />
                    </AdminButton>
                    <AdminButton
                      $color={commonTextColor[theme]}
                      onClick={(e: any) => {
                        e.preventDefault();
                        onClickPostDeleteHandler(
                          (item?.type === 'projects') ? item?.connection : item?.category,
                          item?.id,
                          item?.type,
                          (item?.type === 'projects') ? 'connection' : 'category')
                      }}>
                      <FaTrashAlt />
                    </AdminButton>
                  </AdminButtonWrapper>}
              </TitleLane>
            </PostsLane>
          </PostsLaneContainer>
        )}
      </PostsContainer>
    </SiteContainer>
  )
};

export const SiteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;

  @media screen and (max-width: 1140px) {
    gap: 16px;
  }
`;

export const PostsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 40px 24px 80px 24px;
  gap: 4px;

  @media screen and (max-width: 1140px) {
    padding: 16px 10px 30px 10px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const PostsCategory = styled.h1`
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  user-select: none;
  margin-bottom: 24px;

  @media screen and (max-width: 1140px) {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: start;
  }
`;

export const InsertButton = styled.a`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 10px;
  }
`;

export const PostsLaneContainer = styled.li`
  width: 100%;
`;

export const PostsLane = styled.a`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  border-radius: 10px;
  transition: all 0.3s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #e9edffc7;
  }

  @media screen and (max-width: 1140px) {
    padding: 4px 6px;
    gap: 4px;
  }
`;

export const TitleLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

export const PostLaneCategory = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #ee6e6e;
  font-style: italic;

  @media screen and (max-width: 1140px) {
    font-size: 8px;
  }
`;

export const PostTitle = styled.strong`
  width: 100%;
  text-align: start;
  display: -webkitf-flex;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  font-size: 15px;
  font-weight: 600;

  @media screen and (max-width: 1140px) {
    font-size: 10px;
  }
`;

export const PostDate = styled.span`
  min-width: 80px;
  width: 80px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.7px;
  color: #6599e2;

  @media screen and (max-width: 1140px) {
    min-width: 40px;
    width: 40px;
    font-size: 7px;
  }
`;

export const AdminButtonWrapper = styled.div`
  min-width: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 1140px) {
    gap: 4px;
  }
`;

export const AdminLink = styled.a<{ $color: string }>`
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 10px;
  }
`;

export const AdminButton = styled.button<{ $color: string }>`
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 12px;
  }
`;

export default SitePage;