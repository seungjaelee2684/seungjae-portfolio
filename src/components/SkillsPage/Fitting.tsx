import React from 'react'
import styled from 'styled-components';
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";

interface FittingProps {
    fittingSkill: number;
    setFittingSkill: React.Dispatch<React.SetStateAction<number>>;
};

const Fitting : React.FC<FittingProps> = ({ fittingSkill, setFittingSkill }) => {
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
                    right='30px'
                    color="#007ACC">
                    <SiVisualstudiocode />
                </Tools>
            </ToolsWrapper>
            <BackendStackWrapper>
                <BackendStackTitle>
                    Backend Skills
                </BackendStackTitle>
                <BackendStackBox>
                    <BackendStack title="Node.js" color="#339933">
                        <FaNodeJs />
                    </BackendStack>
                </BackendStackBox>
                <BackendStackBox>
                    <BackendStack title="MySQL" color="#4479A1">
                        <SiMysql />
                    </BackendStack>
                </BackendStackBox>
                <BackendStackBox>
                    <BackendStack title="MongoDB" color="#47A248">
                        <SiMongodb />
                    </BackendStack>
                </BackendStackBox>
            </BackendStackWrapper>
        </TopContainer>
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
    gap: 20px;
`;

const TopContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainStack = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid #d4b681;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 32px;
    background-image: linear-gradient(to top, #c8a87840, transparent);
`;

const ToolsWrapper = styled.div`
    width: 110px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Tools = styled(MainStack)<{ right : string, color : string }>`
    width: 100px;
    height: 100px;
    margin-left: ${(props) => props.right};
    color: ${(props) => props.color};
    font-size: 46px;
`;

const BackendStackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-left: 80px;
`;

const BackendStackTitle = styled.div`
    font-size: 22px;
    line-height: 150%;
`;

const BackendStackBox = styled(MainStack)`
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    border-radius: 0%;
    margin-bottom: 20px;
    background-image: linear-gradient(to top left, #c8a87840, transparent);
`;

const BackendStack = styled.div<{ color : string }>`
    transform: rotate(-45deg);
    font-size: 55px;
    color: ${(props) => props.color};
`;

export default Fitting;