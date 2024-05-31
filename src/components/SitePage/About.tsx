import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const About = () => {

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>

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
    gap: 40px;
`;

const CardWrapper = styled.div`
    width: 100%;
    height: 2800px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 40px 0px;
`;

const Title = styled.label`
    font-size: 34px;
    top: 100px;
    color: #FEFEFE;
`;

export default About;