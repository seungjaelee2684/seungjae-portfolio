import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';
import ProjectCard from '../components/ProjectPage/ProjectCard';
import { projectDto } from '../utils/Projects';
import * as Loby from './LobyPage';
import { TbArrowBadgeLeft, TbArrowBadgeRight } from 'react-icons/tb';
import ProjectModal from '../components/ProjectPage/ProjectModal';
import { RootState } from '../store/config/configureStore';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const mobileView = useSelector((state: RootState) => state.isMobile);
    const slideRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<number>(0);
    const stepCurrent = mobileView ? step * 400 : step * 600;
    const [projectKind, setProjectKind] = useState<{
        isopen: boolean,
        id: number
    }>({
        isopen: false,
        id: 1
    });
    const { isopen, id } = projectKind;

    const onClickPrevHandler = () => {
        if (step === 0) { return };
        setStep((step) => step - 1);
    };

    const onClickNextHandler = () => {
        if (step === projectDto?.length - 1) { return };
        setStep((step) => step + 1);
    };

    useEffect(() => {
        dispatch(pageMove("Dungeon"));

        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${stepCurrent}px)`;
        };
    }, [step]);

    return (
        <ProjectInBoxContainer>
            <ProjectOutContainer>
                <ProjectListOutBox>
                    <ProjectListBox ref={slideRef}>
                        {projectDto?.map((item: any, index: number) => {
                            return (
                                (index < projectDto?.length - 1)
                                    &&  <ProjectCardBox key={item?.id}/> 
                            )
                        })}
                        {projectDto?.map((item: any, index: number) => {
                            return (
                                <ProjectCardBox
                                    key={item?.id}
                                    onClick={() => {
                                        if (step === index) {
                                            setProjectKind({...projectKind, isopen: !isopen, id: item?.id})
                                        };
                                        setStep(index);
                                    }}>
                                    <ProjectCard
                                        item={item}
                                        step={step}
                                        setStep={setStep} />
                                </ProjectCardBox>
                            )
                        })}
                    </ProjectListBox>
                </ProjectListOutBox>
            </ProjectOutContainer>
            <Loby.ChoiceButtonWrapper>
                <PrevNextButton xy="-50%" onClick={onClickPrevHandler}>
                    <TbArrowBadgeLeft />
                </PrevNextButton>
                <ProjectKindButton>
                    {projectDto[step]?.project}
                </ProjectKindButton>
                <PrevNextButton xy="50%" onClick={onClickNextHandler}>
                    <TbArrowBadgeRight />
                </PrevNextButton>
            </Loby.ChoiceButtonWrapper>
            {(isopen)
                && <ProjectModal
                    projectKind={projectKind}
                    setProjectKind={setProjectKind}/>}
        </ProjectInBoxContainer>
    )
};

const PrevNextButtonMove = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    transform: translateX(var(--xy));
  }
`;

const ProjectInBoxContainer = styled(InBoxContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    overflow: visible;
`;

const ProjectOutContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectListOutBox = styled.div`
    display: flex;
    align-items: center;
`;

const ProjectListBox = styled.div`
    width: 2880px;
    display: flex;
    align-items: center;
    gap: 120px;
    transition: all 0.3s;

    @media screen and (max-width: 500px) {
        width: 1900px;
        gap: 100px;
    }
`;

const ProjectCardBox = styled.div`
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 250px;
    }
`;

const ProjectKindButton = styled(Loby.ChoiceButton)`
    cursor: default;

    &:hover {
        border: 1px solid #d4b681;
        color: #d4b681;
        background-image: radial-gradient(circle at bottom center, #0a090ec5, #201d31c5);
    }

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }
`;

const PrevNextButton = styled.div<{ xy : string }>`
  font-size: 50px;
  color: #d4b681;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${PrevNextButtonMove} 1.5s linear infinite;
  /* cursor: pointer; */

  --xy: ${(props) => props.xy};

  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

export default ProjectPage;