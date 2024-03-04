import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import { InBoxContainer } from './AboutMePage';

const ProjectPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pageMove("Dungeon"));
    }, []);

    return (
        <InBoxContainer>
            ProjectPage
        </InBoxContainer>
    )
};

export default ProjectPage;