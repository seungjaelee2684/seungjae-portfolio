import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { commonTextColor, textLight } from '../../styles/colorToken';
import { PostsCategory } from '../../pages/SitePage';
import { supabase } from '../../utils/Supabase';
import { sideTapList } from '../../utils/Category';
import { cookies } from '../../utils/Cookies';
import { IoIosSettings } from "react-icons/io";

const SideTap = () => {

  const path = window.location.pathname;
  const theme = useSelector((state: RootState) => state.darkMode);
  const [tap, setTap] = useState<any>(null);
  const [count, setCount] = useState<number | null>(null);

  const linkChange = (index: number, item: any) => {
    if (!item) return;
    if (index === 1) {
      return `/jaelog/${sideTapList[index]?.location}?c=${item.connection}`;
    } else if (index === 2) {
      return `/jaelog/${sideTapList[index]?.location}?c=${item.category}`;
    }
  };

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

    const countData = async () => {
      try {
        const { data, error } = await supabase
          .from('visit_count')
          .select('count')
          .eq('type', 'main')
          .single();

        if (error) throw error;

        setCount(data.count);
      } catch (error) {
        console.error('Error fetching paginated data from Supabase: ', error);
      };
    };

    countData();
    fetchData();
  }, []);

  return (
    <SideTapContainer>
      <PostsCategory>
        Tags
      </PostsCategory>
      {(path !== '/')
        && <SideTapLane>
          <SideTapLink
            href='/'
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
                  href={linkChange(index, list)}
                  $color={commonTextColor[theme]}>
                  ⦁ {(index === 1) ? list.connection : list.category} ({list.count})
                </SideDetailTap>
              )}
            </SideDetailTapLane>}
        </SideTapLane>
      )}
      {(cookies())
        && <SideTapLane style={{ marginTop: '30px' }}>
          <SideTapLink
            href={`/jaelog/option/update`}
            $color={commonTextColor[theme]}>
            <IoIosSettings />
            탭 수정하러가기
          </SideTapLink>
        </SideTapLane>}
      {(cookies()) && <VisitCount>{count}명 방문</VisitCount>}
    </SideTapContainer>
  )
};

const SideTapContainer = styled.ul`
  min-width: 180px;
  width: 180px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-top: 40px;
  user-select: none;
  gap: 8px;
  padding-left: 0px;

  @media screen and (max-width: 1140px) {
    min-width: 68px;
    width: 68px;
    padding-top: 16px;
    /* display: none; */
  }
`;

const SideTapLane = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
  margin-left: 0px;
`;

const SideTapLink = styled.a<{ $color: string }>`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: start;
  gap: 4px;
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

  @media screen and (max-width: 1140px) {
    padding: 0px;
    font-size: 9px;
    height: 16px;
    gap: 2px;
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

  @media screen and (max-width: 1140px) {
    padding-left: 4px;
  }
`;

const SideDetailTap = styled(SideTapLink)`
  font-size: 12px;
  height: 22px;
  text-align: start;

  @media screen and (max-width: 1140px) {
    font-size: 7px;
    height: fit-content;
    padding: 3px 0px;
  }
`;

const VisitCount = styled.span`
  width: 100%;
  text-align: end;
  font-size: 14px;
  color: #ee6e6e;
  margin-top: 40px;

  @media screen and (max-width: 1140px) {
    font-size: 7px;
  }
`;

export default SideTap;