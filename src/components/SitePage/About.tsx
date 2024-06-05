import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

interface AboutProps {
    // testRef: React.RefObject<HTMLDivElement>;
};

const About: React.FC<AboutProps> = () => {

    const boxRef1 = useRef<HTMLDivElement>(null);
    const boxRef2 = useRef<HTMLDivElement>(null);
    const boxRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollEvent = () => {
            if (!boxRef1.current || !boxRef2.current || !boxRef3.current) return;

            let scrolly = window.scrollY;
            let viewportHeight = window.innerHeight;
            let scrolling = scrolly - viewportHeight;
            let elementHeight1 = boxRef1.current.offsetTop + 200;
            let elementHeight2 = boxRef2.current.offsetTop + 200;
            let elementHeight3 = boxRef3.current.offsetTop + 200;
            let result1 = (scrolling / elementHeight1) * 100;
            let result2 = (scrolling / elementHeight2) * 100 - 15;
            let result3 = (scrolling / elementHeight3) * 100 - 30;
            console.log("백분율 => ", result1, result2, result3);

            if (result1 <= 0) {
                boxRef1.current.style.transform = `translateX(${result1}%)`;
            };
            if (result2 <= 0) {
                boxRef2.current.style.transform = `translateX(${result2}%)`;
            };
            if (result3 <= 0) {
                boxRef3.current.style.transform = `translateX(${result3}%)`;
            };
        };

        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        }
    }, []);

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>
                <LaneContainer ref={boxRef1}>
                    <CardBox>

                    </CardBox>
                    <ContentBox>

                    </ContentBox>
                </LaneContainer>
                <LaneContainer ref={boxRef2}>
                    <ContentBox>

                    </ContentBox>
                    <CardBox>

                    </CardBox>
                </LaneContainer>
                <LaneContainer ref={boxRef3}>
                    <CardBox>

                    </CardBox>
                    <ContentBox>

                    </ContentBox>
                </LaneContainer>
            </CardWrapper>
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;
`;

const Title = styled.label`
    font-size: 34px;
    top: 100px;
    color: #FEFEFE;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 20px 0px;
`;

const CardBox = styled.div`
    min-width: 400px;
    height: 300px;
    border: 1px solid #FEFEFE;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export default About;