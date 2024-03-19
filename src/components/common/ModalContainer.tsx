import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { modalOpen } from '../../store/modules/globalModalOpen';
import { RootState } from '../../store/config/configureStore';

const ModalContainer = () => {

    const dispatch = useDispatch();
    const modalData = useSelector((state: RootState) => state.modalOpen);
    const { isopen, kind } = modalData;

    const modalOpenData = () => {
        if (kind === "addCharacter") {
            return (
                <ModalContainerBox onClick={(e) => e.stopPropagation()}>
                    정말로 다른 지원자를 뽑으시겠습니까?
                </ModalContainerBox>
            )
        };
    };

    return (
        <ModalBackgroundContainer onClick={() => dispatch(modalOpen({ kind: "", isopen: false }))}>
            {modalOpenData()}
        </ModalBackgroundContainer>
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

const ModalContainerBox = styled.div`
    width: 100%;
    height: 500px;
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
    user-select: none;
`;

export default ModalContainer;