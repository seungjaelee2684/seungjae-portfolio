import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteHeader from '../components/SitePage/SiteHeader';
import SideTap from '../components/SitePage/SideTap';
import { supabase } from '../utils/Supabase';
import Profile from '../components/SitePage/Profile';
import Category from '../components/SitePage/Category';

const SitePage = () => {

  const [blogData, setBlogData] = useState<any>(null);
  console.log(blogData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');

        if (error) {
          throw error;
        };

        setBlogData(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  }, []);

  return (
    <SiteContainer>
      <SideTap data={blogData} />
      <PostsContainer>
        <PostsLanecontainer>
          <PostTitleWrapper>
            <PostTitle>
              아이디
            </PostTitle>
            <PostSubTitle>
              패스워드
            </PostSubTitle>
          </PostTitleWrapper>
        </PostsLanecontainer>
      </PostsContainer>
    </SiteContainer>
  )
};

export const SiteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const PostsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 24px;
`;

export const PostsLanecontainer = styled.li`
  width: 100%;
  height: 80px;
  padding: 0px 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const PostTitleWrapper = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
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
  font-size: 20px;
  font-weight: 700;
`;

export const PostSubTitle = styled.p`
  width: 100%;
  text-align: start;
  display: -webkitf-flex;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  font-size: 14px;
  font-weight: 400;
`;

export default SitePage;