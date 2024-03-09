import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';
import ProjectCard from '../components/ProjectPage/ProjectCard';
import { projectDto } from '../utils/Projects';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const slideRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<number>(1);
    const stepCurrent = step * 480;
    const [projectKind, setProjectKind] = useState<any>();

    const onClickNextHandler = () => {
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
                                <ProjectCardBox key={item?.id}>
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
            <NextButton onClick={onClickNextHandler}>
                next
            </NextButton>
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
    justify-content: end;
    align-items: center;
`;

const ProjectListOutBox = styled.div`
    width: 60%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ProjectListBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transition: all 0.3s;
`;

const  ProjectCardBox = styled.div`
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NextButton = styled.button`
    width: 120px;
    height: 40px;
    cursor: pointer;
`;

export default ProjectPage;