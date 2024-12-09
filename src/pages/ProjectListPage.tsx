import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AdminButton, AdminButtonWrapper, PostDate, PostLaneCategory, PostsCategory, PostsContainer, PostsLane, PostsLaneContainer, PostTitle, SiteContainer, TitleLane } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { useParams, useSearchParams } from 'react-router-dom';
import { supabase } from '../utils/Supabase';
import { cookies } from '../utils/Cookies';
import { commonTextColor } from '../styles/colorToken';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';
import { onClickPostDeleteHandler } from '../utils/ClickHandler';
import { koreaDate } from '../utils/KoreaTime';

const ProjectListPage = () => {

  const [searchParam] = useSearchParams();
  const connection = searchParam.get('c');

  const theme = useSelector((state: RootState) => state.darkMode);

  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    const postFetch = async () => {
      if (connection) {
        try {
          const { data, error } = await supabase
            .from('projects')
            .select('id, title, created_at, type, connection')
            .eq('connection', connection)
            .order('created_at', { ascending: false })
            .limit(20);

          if (error) throw error;

          setProjectData(data);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      } else {
        try {
          const { data, error } = await supabase
            .from('projects')
            .select('id, title, created_at, type, connection')
            .order('created_at', { ascending: false })
            .limit(10);

          if (error) throw error;

          setProjectData(data);
        } catch (error) {
          console.error("Error fetching paginated data from Supabase: ", error);
        };
      };
    };
    postFetch();
  }, []);

  console.log('블로그 글', projectData);

  return (
    <SiteContainer>
      <SideTap />
      <PostsContainer>
        <PostsCategory>
          {(connection) ? `${connection} 소속` : '전체목록(프로젝트)'}
        </PostsCategory>
        {projectData?.map((item: any, index: any) =>
          <PostsLaneContainer key={index}>
            <PostsLane href={`/jaelog/${item?.type}/${item?.id}`}>
              {(!connection)
                && <PostLaneCategory>
                  # {item?.connection}
                </PostLaneCategory>}
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
                      onClick={(e: any) => {
                        e.preventDefault();
                        window.location.href = `/jaelog/projects/update/${item?.id}`;
                      }}
                      $color={commonTextColor[theme]}>
                      <FaPenToSquare />
                    </AdminButton>
                    <AdminButton
                      onClick={(e: any) => {
                        e.preventDefault();
                        onClickPostDeleteHandler(item?.connection, item?.id, 'projects', 'connection');
                      }}
                      $color={commonTextColor[theme]}>
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

export default ProjectListPage;