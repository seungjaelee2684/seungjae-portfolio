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

const ResumePage = () => {

  const theme = useSelector((state: RootState) => state.darkMode);
  const [project, setProject] = useState<any>(null);

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
            <IntroExpired $color={textLightBlue[theme]}>
              생년월일
            </IntroExpired>
            <IntroText>
              1997.01.21 (27세)
            </IntroText>
            |
            <IntroExpired $color={textLightBlue[theme]}>
              이메일
            </IntroExpired>
            <IntroText>
              sean2684@naver.com
              <LinkIcon
                $color={textLight[theme]}
                href='/contact'>
                <TiArrowForward />
              </LinkIcon>
            </IntroText>
            |
            <IntroExpired $color={textLightBlue[theme]}>
              휴대폰
            </IntroExpired>
            <IntroText>
              010-6532-5635
              <LinkIcon
                $color={textLight[theme]}
                href='tel:01065325635'>
                <TiArrowForward />
              </LinkIcon>
            </IntroText>
          </ResumeContentBox>
        </ResumeLaneContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Skills.
          </ResumeCategory>
          <Skills />
        </ResumeLaneContainer>
        <ResumeLaneContainer>
          <ResumeCategory>
            Experience.
          </ResumeCategory>
          <Experience project={project} theme={theme} />
        </ResumeLaneContainer>
      </ResumeContainer> 
    </SiteContainer>
  )
};

const ResumeContainer = styled.ul`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px auto;
  padding: 40px 0px 80px 0px;

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

const ResumeLaneContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 24px;
  border-bottom: 1px solid;
  border-color: #e9e9e9;
  padding: 80px 20px;
`;

const ResumeCategory = styled.h2`
  font-size: 22px;
  font-weight: 700;
  user-select: none;
  color: #ee6e6e;
`;

const ResumeContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

const IntroExpired = styled.h3<{ $color: string }>`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.$color};
  user-select: none;
`;

const IntroText = styled.p`
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
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
`;

const ResumeContent = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 150%;
  white-space: pre-line;
  text-align: start;
`;

export default ResumePage;