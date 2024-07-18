import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image1 from '../../assets/images/about_1.jpg';
import Image2 from '../../assets/images/about_2.jpg';

interface AboutProps {

};

const About: React.FC<AboutProps> = () => {

    const backgroundRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [aboutOpen, setAboutOpen] = useState<{
        state: string,
        isopen: boolean
    }>({
        state: '',
        isopen: false
    });
    const { state, isopen } = aboutOpen;

    const onClickModalOpenHandler = (st: string) => {
        setAboutOpen(prev => ({ ...prev, state: st, isopen: true }))
    };

    const onClickModalCloseHandler = () => {
        setAboutOpen(prev => ({ ...prev, state: '', isopen: false }));
    };

    useEffect(() => {
        if (!modalRef.current || !backgroundRef.current) return;
        if (isopen) {
            backgroundRef.current.style.visibility = 'visible';
            modalRef.current.style.visibility = 'visible';
            modalRef.current.style.transform = 'scale(1)';

        } else {
            backgroundRef.current.style.visibility = 'hidden';
            modalRef.current.style.visibility = 'hidden';
            modalRef.current.style.transform = 'scale(0)';
        };
    }, [aboutOpen]);

    return (
        <AboutMeContainer id="about us">
            <ModalBackground ref={backgroundRef} onClick={onClickModalCloseHandler}>
                <ModalContainer ref={modalRef}>

                </ModalContainer>
            </ModalBackground>
            <MainTitle>About Us</MainTitle>
            <AboutContentWrapper>
                <AboutLaneContainer>
                    <LeftWrapper>
                        <LaneTitle>끈기</LaneTitle>
                        <LaneContent>
                            자신의 한계를 뛰어넘는 원동력!
                        </LaneContent>
                        <Button onClick={() => onClickModalOpenHandler('끈기')}>자세히보기</Button>
                    </LeftWrapper>
                    <CardImage src={Image1} alt='about 이미지1' />
                </AboutLaneContainer>
                <AboutLaneContainer>
                    <CardImage src={Image2} alt='about 이미지1' />
                    <LeftWrapper>
                        <LaneTitle>책임감</LaneTitle>
                        <LaneContent>
                            프로젝트의 성공을 좌지우지할 수 있는 힘!
                        </LaneContent>
                        <Button onClick={() => onClickModalOpenHandler('책임감')}>자세히보기</Button>
                    </LeftWrapper>
                </AboutLaneContainer>
            </AboutContentWrapper>
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px 0px;
  color: #222020;

  @media screen and (max-width: 1320px) {
        padding: 20px 0px;
    }
`;

const MainTitle = styled.h1`
    font-size: 32px;
    font-weight: 800;
    line-height: 100%;
`;

const AboutContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 1320px) {
        gap: 24px;
    }
`;

const AboutLaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
`;

const LeftWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const LaneTitle = styled.strong`
    font-size: 32px;
    line-height: normal;
`;

const LaneContent = styled.p`
    font-size: 24px;
    line-height: 120%;
    color: #3b3838;
`;

const CardImage = styled.img`
    min-width: 500px;
    height: 300px;
    object-fit: cover;

    @media screen and (max-width: 1320px) {
        min-width: 400px;
        height: 250px;
    }
`;

const Button = styled.button`
    width: 130px;
    height: 38px;
    outline: none;
    border: none;
    background-color: #2d2864;
    color: #FEFEFE;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #6a64ab;
    }
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #22202050;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 25;
    visibility: hidden;
`;

const ModalContainer = styled.div`
    width: 600px;
    height: 700px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #FEFEFE;
    box-shadow: #222020 0px 2px 2px 0px;
    visibility: hidden;
    transition: all 0.3s;
    transform: scale(0);
`;

export default About;