import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostsCategory, PostsContainer, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/Supabase';
import ProjectDetail from '../components/PostsDetailPage/ProjectDetail';
import PracticeDetail from '../components/PostsDetailPage/PracticeDetail';
import { sideTapList } from '../utils/Category';

const PostsDetailPage = () => {

  const { post, postId } = useParams();

  const [postDetail, setPostDetail] = useState<any>(null);
  console.log('게시글 상세', postDetail);

  const Posts = () => {
    if (!post) return;
    if (post === 'projects') {
      return (
        <ProjectDetail data={postDetail} />
      )
    } else if (post === 'practices') {
      return (
        <PracticeDetail data={postDetail} />
      )
    } else {
      return;
    };
  };

  useEffect(() => {
    const postData = async () => {
      if (!post || !postId) return;

      try {
        const { data, error } = await supabase
          .from(post)
          .select('*')
          .eq('id', postId);

        if (error) throw error;

        setPostDetail(data[0]);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    postData();
  }, []);

  return (
    <SiteContainer>
      <SideTap />
      {Posts()}
    </SiteContainer>
  )
};

export default PostsDetailPage;