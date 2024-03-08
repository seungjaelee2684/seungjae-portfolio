import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';
import ProjectCard from '../components/ProjectPage/ProjectCard';

const ProjectPage = () => {

    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(pageMove("Dungeon"));
    }, []);

    return (
        <InBoxContainer>
            <ProjectOutContainer>
                <ProjectCard />
            </ProjectOutContainer>
        </InBoxContainer>
    )
};

const ProjectOutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ProjectPage;