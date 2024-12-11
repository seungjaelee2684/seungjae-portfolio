import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { textMedium, textLightBlue } from '../../styles/colorToken';
import { supabase } from '../../utils/Supabase';
import { FaArrowRightLong } from "react-icons/fa6";
import '../../styles/contentStyle.css';

interface ExperienceProps {
  project: any;
  theme: number;
};

const Experience = ({ project, theme }: ExperienceProps) => {

  const experienceList = project?.filter((item: any) => item.connection !== '팀 프로젝트');
  const skillList = experienceList?.map((item: any) => item.stack);
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
  console.log("🚀 ~ Experience ~ experienceList:", experienceList, stackData);

  return (
    <ProjectContainer>
      {experienceList?.map((item: any, index: number) =>
        <ProjectList key={index}>
          <ProjectSeeMore href={`/jaelog/projects/${item?.id}`}>
            자세히보기
            <FaArrowRightLong size={12} />
          </ProjectSeeMore>
          <ProjectExpireWrapper>
            <ProjectExpire>
              {item?.connection}
            </ProjectExpire>
            <DateText $color={textMedium[theme]}>
              {item?.start_date} - {item?.end_date}
            </DateText>
            <RoleText $color={textLightBlue[theme]}>
              {item?.role}
            </RoleText>
          </ProjectExpireWrapper>
          <ProjectContent>
            <StrongText>{item?.title}</StrongText>
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

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  user-select: none;
  gap: 60px;
`;

export const ProjectList = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  position: relative;
`;

export const ProjectSeeMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  position: absolute;
  top: 20px;
  right: 0;
  color: #ee6e6e;
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    gap: 16px;
    opacity: 0.8;
  }
`;

export const ProjectExpireWrapper = styled.div`
  min-width: 240px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProjectExpire = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: start;
`;

export const RoleText = styled.span<{ $color: string }>`
  font-size: 13px;
  text-align: start;
  letter-spacing: -0.3px;
  font-style: italic;
  color: ${(props) => props.$color};
  white-space: pre-line;
`;

export const DateText = styled.span<{ $color: string }>`
  font-size: 16px;
  text-align: start;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
  color: ${(props) => props.$color};
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const StrongText = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

export const SmallExpired = styled.strong`
  font-size: 17px;
  margin: 30px 0px 10px 0px;
`;

export const ContentText = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  white-space: pre-line;
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

export const StackBox = styled.div`
  font-size: 15px;
  text-align: start;
`;

export const DetailContent = styled.div`
  width: 100%;
  text-align: start;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;
`;

export default Experience;