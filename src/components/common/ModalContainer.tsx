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
        if (kind === "startGame") {
            return (
                <ModalInWrapper>
                    <TitleContainer>
                        포트폴리오 감상 안내
                    </TitleContainer>
                    <ContentContainer>
                        {`게임을 모티브로 제작된 게임 캐릭터 프로필 형식의 포트폴리오입니다.`}
                    </ContentContainer>
                    <ContentContainer>
                        {`'New Game', 혹은 'Load Game'을 눌러 게임을 시작하면\n지원자의 포트폴리오를 확인하실 수 있습니다.`}
                    </ContentContainer>
                    <ContentContainer>
                        {`이용하는 방법은 크게 어렵지 않으며 'New Game'을 선택할 경우\n가이드가 제공되어 가이드의 안내에 따라 포트폴리오 확인이 가능합니다.`}
                    </ContentContainer>
                    <ContentContainer>
                        {`New Game: 가이드가 제공되는 선택지입니다.\nLoad Game: 가이드 없이 빠르게 확인할 수 있는 선택지입니다.`}
                    </ContentContainer>
                </ModalInWrapper>
            )
        };
        if (kind === "addCharacter") {
            return (
                <ModalInWrapper>
                    <TitleContainer>
                        새로운 지원자를 추가할 수 없습니다.
                    </TitleContainer>
                    <ContentContainer>
                        {`현 지원자는 기업의 이상을 실현함에 있어\n높은 기여가 기대되는 최고의 인재상입니다.`}
                    </ContentContainer>
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
    z-index: 26;
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

    @media screen and (max-width: 500px) {
        height: 400px;
    }
`;

const ModalInWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 120%;
    }
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

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`;

const ContentContainer = styled.div`
    font-size: 18px;
    line-height: 150%;
    white-space: pre-line;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
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
    cursor: pointer;

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