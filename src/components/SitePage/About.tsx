import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

interface AboutProps {
    testRef: React.RefObject<HTMLDivElement>;
};

const About: React.FC<AboutProps> = ({ testRef }) => {

    useEffect(() => {
        
    }, []);

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>
                <LaneContainer ref={testRef}>
                    <CardBox>

                    </CardBox>
                    <ContentBox>

                    </ContentBox>
                </LaneContainer>
                <LaneContainer>
                    <ContentBox>

                    </ContentBox>
                    <CardBox>

                    </CardBox>
                </LaneContainer>
                <LaneContainer>
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