import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <AboutMeContainer id="about us">
        <Title>
            About
        </Title>
        <CardWrapper>
            <AboutCard>
                1
            </AboutCard>
            <AboutCard>
                2
            </AboutCard>
            <AboutCard>
                3
            </AboutCard>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
`;

const Title = styled.label`

`;

const AboutCard = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
`;

export default About;