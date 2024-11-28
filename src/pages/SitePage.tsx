import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteHeader from '../components/SitePage/SiteHeader';
import SideTap from '../components/SitePage/SideTap';
import { supabase } from '../utils/Supabase';
import Profile from '../components/SitePage/Profile';

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
      <SiteHeader />
      <Profile />
      <SiteWrapper>
        <SideTap />
      </SiteWrapper>
    </SiteContainer>
  )
};

const SiteContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 120px auto 0px auto;

  @media screen and (max-width: 900px) {
    width: 94%;
  }
`;

const SiteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export default SitePage;