import React from 'react'
import styled, { keyframes } from 'styled-components';
import { projectDto } from '../../utils/Projects';

interface ProjectModalProps {
    projectKind: {
        isopen: boolean,
        id: number
    };
    setProjectKind: React.Dispatch<React.SetStateAction<{
        isopen: boolean,
        id: number
    }>>;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ projectKind, setProjectKind }) => {

    const { isopen, id } = projectKind;

    return (
        <ModalBackground>
            <ModalContainer>
                <TitleBox>
                    <TitleBackground />
                    <Title>
                        {projectDto[id - 1]?.project}
                    </Title>
                </TitleBox>
                <ContentBox style={{color: "#d4b681"}}>
                    ※ 프로젝트 소개
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.introduce}
                </ContentBox>
                <ContentBox style={{color: "#d4b681"}}>
                    ※ 프로젝트 기간
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.period}
                </ContentBox>
                <ContentBox style={{color: "#d4b681"}}>
                    ※ 프로젝트 기간
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.period}
                </ContentBox>
                <ContentBox style={{color: "#d4b681"}}>
                    ※ 프로젝트 기간
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.period}
                </ContentBox>
            </ModalContainer>
            <CloseButton onClick={() => setProjectKind({ ...projectKind, isopen: false })}>
                닫기
            </CloseButton>
        </ModalBackground>
    )
};

const ModalOpenAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scaleY(0);
    }

    100% {
        opacity: 1;
        transform: scaleY(1);
    }
`;

const TitleOpen = keyframes`
    0% {
        opacity: 0;
        transform: scaleX(0);
    }

    100% {
        opacity: 1;
        transform: scaleX(1);
    }
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 16;
    background-color: #00000050;
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const ModalContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-image: radial-gradient(circle at center, #3b80c0ab, #10395fee);
    border-top: 4px solid #328add;
    border-bottom: 4px solid #328add;
    animation: ${ModalOpenAnimation} 0.3s forwards;
    color: #FFFFFF;
`;

const TitleBox = styled.div`
    width: 700px;
    height: 80px;
    position: relative;
`;

const TitleBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle at center, #431ed7f9, transparent);
    opacity: 0;
    animation: ${TitleOpen} 0.5s forwards 0.3s;
    border-radius: 80px;
`;

const Title = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    line-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const ContentBox = styled.div`
    width: 100%;
    font-size: 18px;
    line-height: 100%;
`;

const CloseButton = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "GongGothicMedium";
    color: #FFFFFF;
    box-shadow: #177edf6a 0px 0px 4px 0px;
    border: 1px solid #177edf6a;
    background-image: linear-gradient(to top, #3b7fc06a, transparent);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        box-shadow: #177edf 0px 0px 4px 0px;
        border: 1px solid #177edf;
        background-image: linear-gradient(to top, #3b7fc0, transparent);
    }
`;

export default ProjectModal;