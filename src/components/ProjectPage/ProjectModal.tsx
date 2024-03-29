import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import { projectDto } from '../../utils/Projects';
import * as CommomModal from '../common/ModalContainer';

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
    const bgRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const underRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (projectRef.current && bgRef.current && underRef.current) {
            if (isopen) {
                bgRef.current.style.visibility = "visible";

                setTimeout(() => {
                    if (projectRef.current) {
                        projectRef.current.style.opacity = "1";
                        projectRef.current.style.transform = "scaleX(1)";
                    };
                }, 100);

                setTimeout(() => {
                    if (underRef.current) {
                        underRef.current.style.opacity = "1";
                        underRef.current.style.transform = "scaleX(1)";
                    };
                }, 500); 
            } else {
                underRef.current.style.opacity = "0";
                underRef.current.style.transform = "scaleX(0)";
                projectRef.current.style.opacity = "0";
                projectRef.current.style.transform = "scaleX(0)";

                setTimeout(() => {
                    if (bgRef.current) {
                        bgRef.current.style.visibility = "hidden";
                    };
                }, 500);  
            }      
        };
    }, [isopen]);

    return (
        <ModalBackground ref={bgRef}>
            <ModalContainer ref={projectRef}>
                <TitleBox>
                    <TitleBackground ref={underRef}/>
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
            <CommomModal.CloseButton onClick={() => setProjectKind({ ...projectKind, isopen: false })}>
                닫기
            </CommomModal.CloseButton>
        </ModalBackground>
    )
};

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 16;
    visibility: hidden;
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
    transition: all 0.4s ease-in-out;
    opacity: 0;
    transform: scaleX(0);
    background-image: radial-gradient(circle at center, #3b80c0c5, #10395fee);
    border-left: 4px solid #328add;
    border-right: 4px solid #328add;
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
    transition: all 0.4s ease-in-out;
    transform: scaleX(0);
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

export default ProjectModal;