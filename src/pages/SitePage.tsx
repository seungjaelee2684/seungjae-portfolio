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
          .select('*')
          .order('created_at', { ascending: false });

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
      <SideTap />
      <PostsContainer>
        <PostsCategory>
          최근 글
        </PostsCategory>
        {blogData?.map((item: any, index: any) =>
          <PostsLaneContainer key={index}>
            <PostsLane>
              <PostTitle>
                {item?.name}
              </PostTitle>
              <PostDate>
                {item?.created_at.slice(0, 10)}
              </PostDate>
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
`;

export const PostsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 40px 24px;
  gap: 4px;
`;

export const PostsCategory = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const PostsLaneContainer = styled.li`
  width: 100%;
`;

export const PostsLane = styled.a`
  width: 100%;
  height: 50px;
  padding: 0px 16px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #e9edffc7;
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
`;

export const PostDate = styled.span`
  min-width: 80px;
  width: 80px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.7px;
`;

export default SitePage;