import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';
import ProjectCard from '../components/ProjectPage/ProjectCard';
import { projectDto } from '../utils/Projects';
import * as Loby from './LobyPage';
import { TbArrowBadgeLeft, TbArrowBadgeRight } from 'react-icons/tb';
import ProjectModal from '../components/ProjectPage/ProjectModal';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const slideRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<number>(0);
    const stepCurrent = step * 602;
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
                <Loby.PrevNextButton xy="-50%" onClick={onClickPrevHandler}>
                    <TbArrowBadgeLeft />
                </Loby.PrevNextButton>
                <Loby.ChoiceButton>
                    {projectDto[step]?.project}
                </Loby.ChoiceButton>
                <Loby.PrevNextButton xy="50%" onClick={onClickNextHandler}>
                    <TbArrowBadgeRight />
                </Loby.PrevNextButton>
            </Loby.ChoiceButtonWrapper>
            {(isopen)
                && <ProjectModal
                    projectKind={projectKind}
                    setProjectKind={setProjectKind}/>}
        </ProjectInBoxContainer>
    )
};

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
    width: 2888px;
    display: flex;
    align-items: center;
    gap: 120px;
    transition: all 0.3s;
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
        width: 320px;
        height: 280px;
    }
`;

export default ProjectPage;