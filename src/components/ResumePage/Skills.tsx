import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config/configureStore';
import { textLightBlue } from '../../styles/colorToken';
import { supabase } from '../../utils/Supabase';

const Skills = () => {

  const theme = useSelector((state: RootState) => state.darkMode);
  const [skillList, setSkillList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('stacks')
          .select('*')
          .in('id', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

        if (error) throw error;

        setSkillList(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    fetchData();
  }, []);

  return (
    <SkillWrapper>
      {skillList?.map((item: any, index: number) =>
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
  )
};

const SkillWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 10px;
  user-select: none;
`;

const SkillTag = styled.li<{ $color: string }>`
  width: fit-content;
  padding: 6px 12px;
  border: 1px solid;
  border-color: ${(props) => props.$color};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StackIcon = styled.div`
  width: 20px;
  height: 20px;
`;

export default Skills;