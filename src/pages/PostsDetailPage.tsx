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
  const [tap, setTap] = useState<any>([]);
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
      return
    };
  };

  useEffect(() => {
    const postData = async () => {
      if (!post || !postId) return;

      if (post === 'projects') {
        try {
          const { data, error } = await supabase
            .from('projects_connection')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;

          setTap(data);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      } else if (post === 'practices') {
        try {
          const { data, error } = await supabase
            .from('practices_category')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;

          setTap(data);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      } else {
        setTap(sideTapList);
      };

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
      <SideTap data={tap} param={post} />
      {Posts()}
    </SiteContainer>
  )
};

export default PostsDetailPage;