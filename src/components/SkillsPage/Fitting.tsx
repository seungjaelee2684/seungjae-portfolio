import React from 'react'
import styled from 'styled-components';
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

interface FittingProps {
    skillArr: number[];
    setSkillArr: React.Dispatch<React.SetStateAction<number[]>>;
    fittingSkill: number;
    setFittingSkill: React.Dispatch<React.SetStateAction<number>>;
};

const Fitting : React.FC<FittingProps> = ({ skillArr, setSkillArr, fittingSkill, setFittingSkill }) => {
  
    const navigate = useNavigate();

    const onClickRemoveSkillHandler = () => {
        setSkillArr([]);
        setFittingSkill(0);
    };
  
    return (
    <FittingContainer>
        <TopContainer>
            <MainStack>
                {fittingSkill}%
            </MainStack>
            <ToolsWrapper>
                <Tools
                    title="Github"
                    right='0px'
                    color="#181717">
                    <FaGithub />
                </Tools>
                <Tools
                    title="Jira"
                    right='50px'
                    color="#0052CC">
                    <SiJira />
                </Tools>
                <Tools
                    title="Visual Studio Code"
                    right='20px'
                    color="#007ACC">
                    <SiVisualstudiocode />
                </Tools>
            </ToolsWrapper>
            <BackendStackWrapper>
                <BackendStackTitle>
                    Backend Skills
                </BackendStackTitle>
                <BackendStackBox title="Node.js">
                    <BackendStack color="#339933">
                        <FaNodeJs />
                    </BackendStack>
                </BackendStackBox>
                <BackendStackBox title="MySQL">
                    <BackendStack color="#4479A1">
                        <SiMysql />
                    </BackendStack>
                </BackendStackBox>
                <BackendStackBox title="MongoDB">
                    <BackendStack color="#47A248">
                        <SiMongodb />
                    </BackendStack>
                </BackendStackBox>
            </BackendStackWrapper>
        </TopContainer>
        <ButtonWrapper>
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
                : <Button onClick={() => navigate("/dungeon")}>
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 32px;
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
        font-size: 22px;
    }
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

const Tools = styled(MainStack)<{ right : string, color : string }>`
    min-width: 100px;
    height: 100px;
    margin-left: ${(props) => props.right};
    color: ${(props) => props.color};
    font-size: 46px;

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
    border: 2px solid #d4b681;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    margin-bottom: 20px;
    background-image: linear-gradient(to top left, #c8a87840, transparent);

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
        width: 42px;
        height: 42px;
        margin-bottom: 3px;
    }
`;

const BackendStack = styled.div<{ color : string }>`
    transform: rotate(-45deg);
    font-size: 55px;
    color: ${(props) => props.color};

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
    /* cursor: default; */

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
    /* cursor: pointer; */

    &:hover {
        box-shadow: #177edf 0px 0px 4px 0px;
        border: 1px solid #177edf;
        background-image: linear-gradient(to top, #3b7fc0, transparent);
    }
`;

export default Fitting;