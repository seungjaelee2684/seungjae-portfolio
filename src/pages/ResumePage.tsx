import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostsCategory, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { lineLight, textLight, textLightBlue } from '../styles/colorToken';
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';
import { TiArrowForward } from "react-icons/ti";
import Skills from '../components/ResumePage/Skills';
import Experience from '../components/ResumePage/Experience';
import { supabase } from '../utils/Supabase';
import Projects from '../components/ResumePage/Projects';
import Education from '../components/ResumePage/Education';
import { visitCookie } from '../utils/Cookies';

const ResumePage = () => {

  const theme = useSelector((state: RootState) => state.darkMode);
  const [project, setProject] = useState<any>(null);

  const isCookie = visitCookie('vs-ct');

  const cookieSet = () => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('visit_count')
          .select('count')
          .eq('type', 'main')
          .single();

        if (error) throw error;

        const updatedCount = data.count + 1;

        const { error: updateError } = await supabase
          .from('visit_count')
          .update({ count: updatedCount })
          .eq('type', 'main')
          .select();

        if (updateError) throw updateError;

        const now = new Date();
        now.setHours(23, 59, 59, 999);
        const expires = "expires=" + now.toUTCString();
        document.cookie = `vs-ct=visited; ${expires}; path=/`;
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  };

  useEffect(() => {
    if (!isCookie) { cookieSet(); };
  }, [isCookie]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setProject(data);
      } catch (error) {
        console.error("", error);
      };
    };

    fetchData();
  }, []);

  return (
    <SiteContainer>
      <ResumeContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Introduce.
          </ResumeCategory>
          <ResumeContentBox>
            <IntroLaneWrapper>
              <IntroExpired $color={textLightBlue[theme]}>
                생년월일
              </IntroExpired>
              <IntroText>
                1997.01.21 (27세)
              </IntroText>
            </IntroLaneWrapper>
            <IntroLaneWrapper>
              <IntroExpired $color={textLightBlue[theme]}>
                이메일
              </IntroExpired>
              <IntroText>
                sean2684@naver.com
              </IntroText>
              <LinkIcon
                $color={textLight[theme]}
                href='/contact'>
                <TiArrowForward />
              </LinkIcon>
            </IntroLaneWrapper>
            <IntroLaneWrapper>
              <IntroExpired $color={textLightBlue[theme]}>
                휴대폰
              </IntroExpired>
              <IntroText>
                010-6532-5635
              </IntroText>
              <LinkIcon
                $color={textLight[theme]}
                href='tel:01065325635'>
                <TiArrowForward />
              </LinkIcon>
            </IntroLaneWrapper>
          </ResumeContentBox>
        </ResumeLaneContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Experience.
          </ResumeCategory>
          <Experience project={project} theme={theme} />
        </ResumeLaneContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Project.
          </ResumeCategory>
          <Projects project={project} theme={theme} />
        </ResumeLaneContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Skills.
          </ResumeCategory>
          <Skills />
        </ResumeLaneContainer>
        <ResumeLaneContainer style={{ borderBottom: 'none' }}>
          <ResumeCategory>
            Education.
          </ResumeCategory>
          <Education theme={theme} />
        </ResumeLaneContainer>
      </ResumeContainer>
    </SiteContainer>
  )
};

const ResumeContainer = styled.ul`
  width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px auto;
  padding: 0px 0px 80px 0px;

  @media screen and (max-width: 1140px) {
    width: 100%;
  }
`;

const ResumeLaneContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  border-bottom: 1px solid;
  border-color: #e9e9e9;
  padding: 40px 20px;

  @media screen and (max-width: 1140px) {
    gap: 20px;
    padding: 20px 0px;
  }
`;

const ResumeCategory = styled.h2`
  font-size: 22px;
  font-weight: 700;
  user-select: none;
  color: #ee6e6e;

  @media screen and (max-width: 1140px) {
    font-size: 14px;
  }
`;

const ResumeContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;

  @media screen and (max-width: 1140px) {
    gap: 8px;
  }
`;

const IntroLaneWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
`;

const IntroExpired = styled.h3<{ $color: string }>`
  width: 120px;
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.$color};
  text-align: start;
  user-select: none;

  @media screen and (max-width: 1140px) {
    width: 60px;
    font-size: 12px;
  }
`;

const IntroText = styled.p`
  font-size: 17px;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1140px) {
    font-size: 12px;
  }
`;

const LinkIcon = styled.a<{ $color: string }>`
  width: 24px;
  height: 24px;
  font-size: 18px;
  color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    width: 16px;
    height: 16px;
    font-size: 12px;
  }
`;

export default ResumePage;