import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AdminButton, AdminButtonWrapper, PostDate, PostsCategory, PostsContainer, PostsLane, PostsLaneContainer, PostTitle, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { useParams, useSearchParams } from 'react-router-dom';
import { supabase } from '../utils/Supabase';
import { cookies } from '../utils/Cookies';
import { commonTextColor } from '../styles/colorToken';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';

const ProjectListPage = () => {

  const [searchParam] = useSearchParams();
  const connection = searchParam.get('c');

  const theme = useSelector((state: RootState) => state.darkMode);

  const [projectData, setProjectData] = useState<any>(null);
  const [tap, setTap] = useState<any>(null);

  useEffect(() => {
    const postFetch = async () => {
      if (connection) {
        try {
          const [projects, connectionData] = await Promise.all([
            supabase.from('projects').select('id, title, created_at, type').eq('id', connection).order('created_at', { ascending: false }),
            supabase.from('projects_connection').select('connection').eq('id', connection).limit(1)
          ]);

          if (projects.error) throw projects.error;
          if (connectionData.error) throw connectionData.error;

          setProjectData(projects?.data);
          setTap(connectionData?.data[0]);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      } else {
        try {
          const { data, error } = await supabase
            .from('projects')
            .select('id, title, created_at, type')
            .order('created_at', { ascending: false });

          if (error) throw error;

          setProjectData(data);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };
    };
    postFetch(); 
  }, []);

  console.log('블로그 글', projectData, tap);

  return (
    <SiteContainer>
      <SideTap />
      <PostsContainer>
        <PostsCategory>
          {(connection) ? `${tap?.connection} 소속` : '전체목록'}
        </PostsCategory>
        {projectData?.map((item: any, index: any) =>
          <PostsLaneContainer key={index}>
            <PostsLane href={`/jaelog/${item?.type}/${item?.id}`}>
              <PostTitle>
                {item?.title}
              </PostTitle>
              <PostDate>
                {item?.created_at.slice(0, 10)}
              </PostDate>
              {(cookies())
                && <AdminButtonWrapper>
                  <AdminButton $color={commonTextColor[theme]}>
                    <FaPenToSquare />
                  </AdminButton>
                  <AdminButton $color={commonTextColor[theme]}>
                    <FaTrashAlt />
                  </AdminButton>
                </AdminButtonWrapper>}
            </PostsLane>
          </PostsLaneContainer>
        )}
      </PostsContainer>
    </SiteContainer>
  )
};

export default ProjectListPage;