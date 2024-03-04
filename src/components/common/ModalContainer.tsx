import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { modalOpen } from '../../store/modules/globalModalOpen';

const ModalContainer = () => {

    const dispatch = useDispatch();

    return (
        <ModalBackgroundContainer onClick={() => dispatch(modalOpen({ kind: "", isopen: false }))}>
            ModalContainer
        </ModalBackgroundContainer>
    )
};

const ModalBackgroundContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: #00000050;
    backdrop-filter: blur(3px);
`;

export default ModalContainer;