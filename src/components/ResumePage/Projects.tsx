import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { textMedium, textLightBlue } from '../../styles/colorToken';
import { supabase } from '../../utils/Supabase';
import { FaArrowRightLong } from "react-icons/fa6";
import '../../styles/contentStyle.css';
import {
  ContentText,
  DateText,
  DetailContent,
  ProjectContainer,
  ProjectContent,
  ProjectExpire,
  ProjectExpireWrapper,
  ProjectList,
  ProjectSeeMore,
  RoleText,
  SmallExpired,
  StackBox,
  StrongText
} from './Experience';

interface ProjectsProps {
  project: any;
  theme: number;
};

const Projects = ({ project, theme }: ProjectsProps) => {

  const projectsList = project?.filter((item: any) => item.connection === '팀 프로젝트');
  const skillList = projectsList?.map((item: any) => item.stack);
  const [stackData, setStackData] = useState<any>(null);
  const [flattenedList, setFlattenedList] = useState<any>(null);

  const parserHandler = (item: any) => {
    const content = item?.content || '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const olHtml = doc.querySelector('ol')?.outerHTML || '';
    return olHtml;
  };

  useEffect(() => {
    const newFlattenedList = skillList?.flat().reduce((acc: any, value: any) => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);

    // flattenedList 값이 달라질 때만 상태 업데이트
    if (newFlattenedList && newFlattenedList?.length !== flattenedList?.length) {
      setFlattenedList(newFlattenedList);
    }
  }, [skillList]);

  useEffect(() => {
    const flattenedList = skillList?.flat().reduce((acc: any, value: any) => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);

    const fetchData = async () => {


      try {
        const { data, error } = await supabase
          .from('stacks')
          .select('id, stack')
          .in('id', flattenedList);

        if (error) throw error;

        setStackData(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    if (flattenedList?.length > 0) fetchData();
  }, [flattenedList]);
  console.log("🚀 ~ Experience ~ experienceList:", projectsList, stackData);

  return (
    <ProjectContainer>
      {projectsList?.map((item: any, index: number) =>
        <ProjectList key={index}>
          <ProjectSeeMore href={`/jaelog/projects/${item?.id}`}>
            자세히보기
            <FaArrowRightLong size={12} />
          </ProjectSeeMore>
          <ProjectExpireWrapper>
            <ProjectExpire>
              {item?.title}
            </ProjectExpire>
            <DateText $color={textMedium[theme]}>
              {item?.start_date} - {item?.end_date}
            </DateText>
            <RoleText $color={textLightBlue[theme]}>
              {item?.role}
            </RoleText>
          </ProjectExpireWrapper>
          <ProjectContent>
            <StrongText>{item?.connection}</StrongText>
            <SmallExpired>Description.</SmallExpired>
            <ContentText>{item?.description}</ContentText>
            <SmallExpired>Role.</SmallExpired>
            <ContentText>{item?.work}</ContentText>
            <SmallExpired>Skills.</SmallExpired>
            <ContentText>
              {stackData?.map((s: any, idx: number) =>
                (item?.stack?.includes(s?.id))
                && <StackBox key={idx}>
                  {s?.stack}{(idx < (stackData?.length - 1)) && ','}&nbsp;&nbsp;
                </StackBox>
              )}
            </ContentText>
            <SmallExpired>Details.</SmallExpired>
            <DetailContent dangerouslySetInnerHTML={{ __html: parserHandler(item) }} />
          </ProjectContent>
        </ProjectList>)}
    </ProjectContainer>
  )
};

export default Projects;