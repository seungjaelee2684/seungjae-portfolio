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
                <ModalContainerBox>
                    <TitleContainer>
                        정말로 다른 지원자를 뽑으시겠습니까?
                    </TitleContainer>
                </ModalContainerBox>
            )
        };
    };

    return (
        <ModalBackgroundContainer>
            {modalOpenData()}
            <CloseButton
                onClick={() => {
                    dispatch(modalOpen({ kind: "", isopen: false }));
                }}>
                닫기
            </CloseButton>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
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
    font-family: "GongGothicMedium";
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

const TitleContainer = styled.div`
    width: fit-content;
    font-size: 28px;
    font-weight: 500;
    line-height: 150%;
`;

export const CloseButton = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "GongGothicMedium";
    color: #FFFFFF;
    box-shadow: #177edf6a 0px 0px 4px 0px;
    border: 1px solid #177edf6a;
    background-image: linear-gradient(to top, #3b7fc06a, transparent);
    transition: all 0.2s;
    /* cursor: pointer; */

    &:hover {
        box-shadow: #177edf 0px 0px 4px 0px;
        border: 1px solid #177edf;
        background-image: linear-gradient(to top, #3b7fc0, transparent);
    }

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 36px;
        font-size: 14px;
    }
`;

export default ModalContainer;