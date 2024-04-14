import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const About = () => {

    const boxRef1 = useRef<HTMLDivElement>(null);
    const boxRef2 = useRef<HTMLDivElement>(null);
    const boxRef3 = useRef<HTMLDivElement>(null);
    const [scrollEffect, setScrollEffect] = useState<number>(0);

    useEffect(() => {
        const scrollEvent = () => {
            let scrollY = window.scrollY;
            let scroll = scrollY - 700;
            console.log("스크롤 -> ", scroll);
            
            if (boxRef1.current && boxRef2.current && boxRef3.current) {
                boxRef1.current.style.transform = `translateY(-${(scrollY - 700)}%)`;
            };

        };

        window.addEventListener("scroll", scrollEvent);

        return () => window.removeEventListener("scroll", scrollEvent);
    }, []);

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>
                <AboutCardContainer height="2400px">
                    <AboutCard>
                        1
                    </AboutCard>
                </AboutCardContainer>
                <AboutCardContainer height="1600px">
                    <AboutCard>
                        2
                    </AboutCard>
                </AboutCardContainer>
                <AboutCardContainer height="800px">
                    <AboutCard>
                        3
                    </AboutCard>
                </AboutCardContainer>
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
    height: 3000px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 40px 0px;
`;

const Title = styled.label`
    font-size: 34px;
`;

const AboutCardContainer = styled.div<{ height: string }>`
    width: 350px;
    height: ${(props) => props.height};
    display: flex;
    justify-content: center;
    align-items: start;
    position: sticky;
    top: 80px;
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