import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';

const ProjectPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pageMove("Dungeon"));
    }, []);

    return (
        <div>ProjectPage</div>
    )
};

export default ProjectPage;