import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostsContainer, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/Supabase';

const PostsPage = () => {

  const { post } = useParams();

  const [postData, setPostData] = useState<any>(null);
  console.log('블로그 글', postData);

  useEffect(() => {
    const postFetch = async () => {
      if (!post) return;

      try {
        const { data, error } = await supabase
          .from(post)
          .select('*');

        if (error) throw error;

        setPostData(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    postFetch();
  }, []);

  return (
    <SiteContainer>
      <SideTap data={postData} param={post} />
      <PostsContainer>
        
      </PostsContainer>
    </SiteContainer>
  )
};

export default PostsPage;