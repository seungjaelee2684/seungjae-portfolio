import React, { useRef } from 'react'
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
                <TopContentBox style={{color: "#e7ca96"}}>
                    ※ 프로젝트 소개
                    <UnderBar />
                </TopContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.introduce}
                </ContentBox>
                <ContentBox style={{color: "#e7ca96"}}>
                    ※ 프로젝트 기간
                    <UnderBar />
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.period}
                </ContentBox>
                <ContentBox style={{color: "#e7ca96"}}>
                    ※ 사용 스킬
                    <UnderBar />
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.skill}
                </ContentBox>
                <ContentBox style={{color: "#e7ca96"}}>
                    ※ 담당 부분
                    <UnderBar />
                </ContentBox>
                <ContentBox>
                    {projectDto[id - 1]?.part}
                </ContentBox>
                <ContentBox style={{color: "#e7ca96"}}>
                    ※ 링크
                    <UnderBar />
                </ContentBox>
                <Link onClick={() => window.open(projectDto[id - 1]?.url)}>
                    {projectDto[id - 1]?.project}
                </Link>
            </ModalContainer>
            <CloseButton onClick={() => setProjectKind({ ...projectKind, isopen: false })}>
                닫기
            </CloseButton>
        </ModalBackground>
    )
};

const ModalOpen = keyframes`
    0% {
        opacity: 0;
        transform: scaleX(0);
    }

    50% {
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
    width: 1320px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-image: radial-gradient(circle at center, #3b80c0c5, #10395fee);
    border-left: 4px solid #328add;
    border-right: 4px solid #328add;
    animation: ${ModalOpen} 0.4s ease-out forwards;
    color: #FFFFFF;
    overflow: hidden;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 60%;
        gap: 10px;
        border-top: 4px solid #328add;
        border-bottom: 4px solid #328add;
        border-left: none;
        border-right: none;
    }
`;

const TitleBox = styled.div`
    width: 500px;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;

    @media screen and (max-width: 500px) {
        width: 220px;
        height: 40px;
    }
`;

const TitleBackground = styled.div`
    width: 100%;
    height: 4px;
    background-image: radial-gradient(circle at center, #e6cea5f8, transparent);
    opacity: 0;
    animation: ${ModalOpen} 0.8s ease-out forwards 0.4s;
`;

const Title = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    line-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-shadow: 1px 1px 4px #fff8e5;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

const ContentBox = styled.div`
    width: fit-content;
    font-size: 18px;
    line-height: 150%;
    white-space: pre-line;
    position: relative;

    @media screen and (max-width: 500px) {
        line-height: 110%;
        font-size: 10px;
    }
`;

const UnderBar = styled.div`
    width: 100%;
    height: 1px;
    background-image: radial-gradient(circle at center, #e6cea5f8, transparent);
    position: absolute;
    bottom: 0;
    left: 0;
`;

const TopContentBox = styled(ContentBox)`
    margin-top: 20px;
`;

const Link = styled.a`
    font-family: "GongGothicMedium";
    width: fit-content;
    height: fit-content;
    font-size: 18px;
    line-height: 150%;
    white-space: pre-line;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid #ffffff75;
        opacity: 0.7;
    }

    @media screen and (max-width: 500px) {
        line-height: 110%;
        font-size: 10px;
    }
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

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 36px;
        font-size: 14px;
    }
`;

export default ProjectModal;