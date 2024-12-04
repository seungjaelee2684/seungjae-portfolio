import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { commonTextColor, textLight } from '../../styles/colorToken';
import { PostsCategory } from '../../pages/SitePage';
import { supabase } from '../../utils/Supabase';
import { sideTapList } from '../../utils/Category';

const SideTap = () => {

  const path = window.location.pathname;
  const theme = useSelector((state: RootState) => state.darkMode);
  const [tap, setTap] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, practice] = await Promise.all([
          supabase.from('projects_connection').select('*').order('created_at', { ascending: false }),
          supabase.from('practices_category').select('*').order('created_at', { ascending: false })
        ]);

        if (project.error) throw project.error;
        if (practice.error) throw practice.error;

        const data = [
          [],
          project.data,
          practice.data
        ]

        setTap(data);
      } catch (error) {
        console.error('Error fetching paginated data from Supabase: ', error);
      };
    };

    fetchData();
  }, []);

  console.log('사이드 탭', tap);

  return (
    <SideTapContainer>
      <PostsCategory>
        Tags
      </PostsCategory>
      {(path !== '/jaelog')
        && <SideTapLane>
          <SideTapLink
            href='/jaelog'
            $color={commonTextColor[theme]}>
            메인으로 가기
          </SideTapLink>
        </SideTapLane>}
      {tap?.map((item: any, index: number) =>
        <SideTapLane key={index}>
          <SideTapLink
            href={`/jaelog/${sideTapList[index]?.location}`}
            $color={commonTextColor[theme]}>
            {sideTapList[index]?.name}
          </SideTapLink>
          {(index !== 0)
            && <SideDetailTapLane>
              {item?.map((list: any, idx: number) =>
                <SideDetailTap
                  key={idx}
                  href={`/jaelog/${sideTapList[index]?.location}?c=${list.id}`}
                  $color={commonTextColor[theme]}>
                  ⦁ {(index === 1) ? list.connection : list.category} ({list.count})
                </SideDetailTap>
              )}
            </SideDetailTapLane>}
        </SideTapLane>
      )}
    </SideTapContainer>
  )
};

const SideTapContainer = styled.ul`
  min-width: 180px;
  width: 180px;
  min-height: 100dvh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-top: 40px;
  user-select: none;
  gap: 8px;
`;

const SideTapLane = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
`;

const SideTapLink = styled.a<{ $color: string }>`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 16px 0px 0px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }
`;

const SideDetailTapLane = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2px;
  padding-left: 6px;
`;

const SideDetailTap = styled(SideTapLink)`
  font-size: 12px;
  height: 22px;
`;

export default SideTap;