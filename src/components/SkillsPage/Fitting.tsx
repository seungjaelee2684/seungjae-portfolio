import React from 'react'
import styled from 'styled-components';
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { skillList } from '../../utils/Skills';

interface FittingProps {
    skillArr: number[];
    setSkillArr: React.Dispatch<React.SetStateAction<number[]>>;
    fittingSkill: number;
    setFittingSkill: React.Dispatch<React.SetStateAction<number>>;
};

const Fitting : React.FC<FittingProps> = ({ skillArr, setSkillArr, fittingSkill, setFittingSkill }) => {
  
    const navigate = useNavigate();
    const guide = localStorage.getItem("guide");

    const onClickRemoveSkillHandler = () => {
        setSkillArr([]);
        setFittingSkill(0);
    };
  
    return (
    <FittingContainer>
        <TopContainer>
            <MainStack>
                <MainStackCircle>
                    <MainStackContainer height={fittingSkill}/>
                    <MainStackPercent>
                        {fittingSkill}%
                    </MainStackPercent>
                </MainStackCircle>
            </MainStack>
            <ToolsWrapper>
                <Tools
                    title="Github"
                    left='10px'
                    color="#181717">
                    <FaGithub />
                </Tools>
                <Tools
                    title="Jira"
                    left='50px'
                    color="#0052CC">
                    <SiJira />
                </Tools>
                <Tools
                    title="Visual Studio Code"
                    left='20px'
                    color="#007ACC">
                    <SiVisualstudiocode />
                </Tools>
            </ToolsWrapper>
            <BackendStackWrapper>
                <BackendStackTitle>
                    Backend Skills
                </BackendStackTitle>
                <BackendStackBox title="Node.js">
                    <BackendStack />
                    <BackendStackInBox color="#339933">
                        <FaNodeJs />
                        <ToolsName>Node.js</ToolsName>
                    </BackendStackInBox>
                </BackendStackBox>
                <BackendStackBox title="MySQL">
                    <BackendStack />
                    <BackendStackInBox color="#4479A1">
                        <SiMysql />
                        <ToolsName>MySQL</ToolsName>
                    </BackendStackInBox>
                </BackendStackBox>
                <BackendStackBox title="Supabase">
                    <BackendStack />
                    <BackendStackInBox color="#3FCF8E">
                        <RiSupabaseFill />
                        <ToolsName>supabase</ToolsName>
                    </BackendStackInBox>
                </BackendStackBox>
            </BackendStackWrapper>
        </TopContainer>
        <ButtonWrapper>
            {(fittingSkill === 100)
                ? <DefaultButton>
                    전체 스킬 장착
                </DefaultButton>
                : <Button onClick={() => {
                    let arr: number[] = [];
                    skillList.forEach((item: any) => {
                    arr.push(item?.id);
                    });
                    setSkillArr([...skillArr, ...arr]);
                    setFittingSkill(100);
                }}>
                    전체 스킬 장착
                </Button>}
            {(fittingSkill === 0)
                ? <DefaultButton>
                    전체 스킬 장착해제
                </DefaultButton>
                : <Button onClick={onClickRemoveSkillHandler}>
                    전체 스킬 장착해제
                </Button>}
            {(fittingSkill < 100)
                ? <DefaultButton>
                    스킬 장착 완료
                </DefaultButton>
                : <Button onClick={() => {
                    if (guide) {
                        localStorage.setItem("guide", "dungeon");
                    };
                    navigate("/dungeon");
                }}>
                    스킬 장착 완료
                </Button>}
        </ButtonWrapper>
    </FittingContainer>
  )
};

const FittingContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    @media screen and (max-width: 1320px) {
        gap: 0px;
    }

    @media screen and (max-width: 800px) {
        gap: 30px;
    }
`;

const TopContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainStack = styled.div`
    min-width: 300px;
    height: 300px;
    border: 2px solid #d4b681;
    border-radius: 100%;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-image: linear-gradient(to top, #c8a87840, transparent);

    @media screen and (max-width: 1320px) {
        min-width: 260px;
        height: 260px;
    }

    @media screen and (max-width: 800px) {
        min-width: 200px;
        height: 200px;
        font-size: 28px;
    }

    @media screen and (max-width: 500px) {
        min-width: 120px;
        height: 120px;
        font-size: 18px;
    }
`;

const MainStackCircle = styled.div`
    width: 96%;
    height: 96%;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const MainStackContainer = styled.div<{ height: number }>`
    width: 200%;
    height: ${(props) => props.height}%;
    position: absolute;
    bottom: 0;
    left: -50%;
    background-color: #e7cb96;
    z-index: 11;
    transition: all 0.2s ease-in-out;
`;

const MainStackPercent = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ToolsWrapper = styled.div`
    width: 110px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1320px) {
        width: 80px;
    }

    @media screen and (max-width: 800px) {
        width: 70px;
        gap: 16px;
    }

    @media screen and (max-width: 500px) {
        width: 50px;
        gap: 8px;
    }
`;

const Tools = styled(MainStack)<{ left : string, color : string }>`
    min-width: 100px;
    height: 100px;
    margin-left: ${(props) => props.left};
    color: ${(props) => props.color};
    font-size: 46px;
    position: relative;

    @media screen and (max-width: 1320px) {
        min-width: 76px;
        height: 76px;
        font-size: 40px;
    }

    @media screen and (max-width: 800px) {
        min-width: 64px;
        height: 64px;
        font-size: 36px;
    }

    @media screen and (max-width: 500px) {
        min-width: 40px;
        height: 40px;
        font-size: 24px;
    }
`;

const ToolsName = styled.span`
    font-size: 12px;

    @media screen and (max-width: 1320px) {
        font-size: 11px;
    }

    @media screen and (max-width: 800px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const BackendStackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-left: 80px;

    @media screen and (max-width: 800px) {
        margin-left: 60px;
    }

    @media screen and (max-width: 500px) {
        margin-left: 40px;
    }
`;

const BackendStackTitle = styled.div`
    font-size: 22px;
    line-height: 150%;

    @media screen and (max-width: 1320px) {
        font-size: 20px;
    }

    @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 130%;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
        line-height: 100%;
    }
`;

const BackendStackBox = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    color: #FFFFFF;
    margin-bottom: 20px;

    @media screen and (max-width: 1320px) {
        width: 80px;
        height: 80px;
    }

    @media screen and (max-width: 800px) {
        width: 66px;
        height: 66px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 800px) {
        width: 54px;
        height: 54px;
        margin-bottom: 0px;
    }
`;

const BackendStack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border: 2px solid #d4b681;
    background-image: linear-gradient(to top left, #c8a87840, transparent);
    transform: rotate(45deg);
`;

const BackendStackInBox = styled.div<{ color : string }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.color};
    font-size: 55px;
    z-index: 2;

    @media screen and (max-width: 1320px) {
        font-size: 48px;
    }

    @media screen and (max-width: 800px) {
        font-size: 44px;
    }

    @media screen and (max-width: 500px) {
        font-size: 30px;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    gap: 30px;

    @media screen and (max-width: 800px) {
        gap: 16px;
    }

    @media screen and (max-width: 500px) {
        gap: 20px;
    }
`;

const DefaultButton = styled.div`
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border: 1px solid #177edf24;
    background-image: linear-gradient(to top, #3b7fc024, transparent);
    box-shadow: none;
    color: #ADADAD;
    background-color: #000000;
    cursor: default;

    @media screen and (max-width: 1320px) {
        width: 140px;
        height: 46px;
        font-size: 14px;
    }

    @media screen and (max-width: 800px) {
        width: 120px;
        height: 40px;
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 32px;
        font-size: 10px;
    }
`;

const Button = styled(DefaultButton)`
    border: 1px solid #177edf6a;
    background-image: linear-gradient(to top, #3b7fc06a, transparent);
    box-shadow: #177edf6a 0px 0px 4px 0px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        box-shadow: #177edf 0px 0px 4px 0px;
        border: 1px solid #177edf;
        background-image: linear-gradient(to top, #3b7fc0, transparent);
    }
`;

export default Fitting;