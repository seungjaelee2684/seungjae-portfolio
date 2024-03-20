import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { modalOpen } from '../../store/modules/globalModalOpen';
import { RootState } from '../../store/config/configureStore';

const ModalContainer = () => {

    const dispatch = useDispatch();
    const backgroundRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const modalData = useSelector((state: RootState) => state.modalOpen);
    const { isopen, kind } = modalData;

    const modalOpenData = () => {
        if (kind === "addCharacter") {
            return (
                <ModalInWrapper>
                    <TitleContainer>
                        정말로 다른 지원자를 뽑으시겠습니까?
                    </TitleContainer>
                </ModalInWrapper>
            )
        };
    };

    useEffect(() => {
        if (modalRef.current && backgroundRef.current) {
            if (isopen) {
                backgroundRef.current.style.visibility = "visible";

                setTimeout(() => {
                    if (modalRef.current) {
                        modalRef.current.style.opacity = "1";
                        modalRef.current.style.transform = "scaleX(1)";
                    };
                }, 100);  
            } else {
                modalRef.current.style.opacity = "0";
                modalRef.current.style.transform = "scaleX(0)";

                setTimeout(() => {
                    if (backgroundRef.current) {
                        backgroundRef.current.style.visibility = "hidden";
                    };
                }, 500);  
            }      
        };
    }, [isopen]);

    return (
        <ModalBackgroundContainer ref={backgroundRef}>
            <ModalContainerBox ref={modalRef}>
                <DiamondBox />
                <BarContainer top='0' bottom='auto' />
                <BarContainer top='auto' bottom='0'/>
                {modalOpenData()}
            </ModalContainerBox>
            <CloseButton
                onClick={() => {
                    dispatch(modalOpen({ kind: undefined, isopen: false }));
                }}>
                닫기
            </CloseButton>
        </ModalBackgroundContainer>
    )
};

const ModalBackgroundContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
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
    background-image: radial-gradient(circle at center, #10305fc5, transparent);
    transition: all 0.4s ease-in-out;
    color: #FFFFFF;
    opacity: 0;
    transform: scaleX(0);
    user-select: none;
    position: relative;
`;

const ModalInWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const BarContainer = styled.div<{ top: string, bottom: string }>`
    width: 100%;
    height: 2px;
    background-image: radial-gradient(circle at center, #e6cea5f8, transparent);
    position: absolute;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: 0;
`;

const DiamondBox = styled.div`
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background-image: radial-gradient(circle at center, #f0e5d4, #dac196e1);
    box-shadow: #f0e5d4 0px 0px 3px 0px;
    position: absolute;
    top: -5px;
    left: calc(50% - 5px);
    z-index: 20;
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