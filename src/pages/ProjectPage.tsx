import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';
import ProjectCard from '../components/ProjectPage/ProjectCard';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const slideRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<number>(0);
    const stepCurrent = step * 390;
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
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
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
`;

const ProjectOutContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: end;
    align-items: center;
    overflow: hidden;
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

const NextButton = styled.button`
    width: 120px;
    height: 40px;
    cursor: pointer;
`;

export default ProjectPage;