import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { textLightBlue } from '../../styles/colorToken';
import { supabase } from '../../utils/Supabase';

const Skills = () => {

  const theme = useSelector((state: RootState) => state.darkMode);
  const [skillList, setSkillList] = useState<any>(null);

  const frontend = skillList?.filter((item: any) => item.function_type === 'front');
  const backend = skillList?.filter((item: any) => item.function_type === 'back');
  const database = skillList?.filter((item: any) => item.function_type === 'database');
  const devtool = skillList?.filter((item: any) => item.function_type === 'tool');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('stacks').select('*');
        if (error) throw error;
        setSkillList(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  }, []);

  return (
    <SkillListWrapper>
      <SkillCategory>
        프론트엔드
      </SkillCategory>
      <SkillWrapper>
        {frontend?.map((item: any, index: number) =>
          <SkillTag key={index} $color={textLightBlue[theme]}>
            <StackIcon
              dangerouslySetInnerHTML={{
                __html: item?.icon.replace('<svg', `<svg fill=${item?.color}`)
              }}
              role="img"
              aria-label={`Icon for ${item?.stack}`} />
            {item?.stack}
          </SkillTag>)}
      </SkillWrapper>
      <SkillCategory>
        백엔드
      </SkillCategory>
      <SkillWrapper>
        {backend?.map((item: any, index: number) =>
          <SkillTag key={index} $color={textLightBlue[theme]}>
            <StackIcon
              dangerouslySetInnerHTML={{
                __html: item?.icon.replace('<svg', `<svg fill=${item?.color}`)
              }}
              role="img"
              aria-label={`Icon for ${item?.stack}`} />
            {item?.stack}
          </SkillTag>)}
      </SkillWrapper>
      <SkillCategory>
        데이터베이스
      </SkillCategory>
      <SkillWrapper>
        {database?.map((item: any, index: number) =>
          <SkillTag key={index} $color={textLightBlue[theme]}>
            <StackIcon
              dangerouslySetInnerHTML={{
                __html: item?.icon.replace('<svg', `<svg fill=${item?.color}`)
              }}
              role="img"
              aria-label={`Icon for ${item?.stack}`} />
            {item?.stack}
          </SkillTag>)}
      </SkillWrapper>
      <SkillCategory>
        데브툴
      </SkillCategory>
      <SkillWrapper>
        {devtool?.map((item: any, index: number) =>
          <SkillTag key={index} $color={textLightBlue[theme]}>
            <StackIcon
              dangerouslySetInnerHTML={{
                __html: item?.icon.replace('<svg', `<svg fill=${item?.color}`)
              }}
              role="img"
              aria-label={`Icon for ${item?.stack}`} />
            {item?.stack}
          </SkillTag>)}
      </SkillWrapper>
    </SkillListWrapper>
  )
};

const SkillListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  user-select: none;
`;

const SkillCategory = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;

const SkillWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.li<{ $color: string }>`
  width: fit-content;
  padding: 4px 12px;
  border: 1px solid;
  border-color: ${(props) => props.$color};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StackIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export default Skills;