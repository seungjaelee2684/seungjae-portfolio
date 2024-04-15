import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const About = () => {

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>
                <AboutCardContainer height="2000px">
                    <AboutCard>
                        <ContentWrapper>
                            🏷️ 이름
                        </ContentWrapper>
                        <ContentWrapper>
                            : 이승재 (Lee SeungJae)
                        </ContentWrapper>
                        <ContentWrapper>
                            👶 출생일
                        </ContentWrapper>
                        <ContentWrapper>
                            : 1997년 1월 21일
                        </ContentWrapper>
                        <ContentWrapper>
                            🗺️ 출생지
                        </ContentWrapper>
                        <ContentWrapper>
                            : 대구 (Daegu)
                        </ContentWrapper>
                    </AboutCard>
                </AboutCardContainer>
                <AboutCardContainer height="1400px">
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
    height: 2800px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 40px 0px;
`;

const Title = styled.label`
    font-size: 34px;
    position: sticky;
    top: 100px;
`;

const AboutCardContainer = styled.div<{ height: string }>`
    width: 400px;
    height: ${(props) => props.height};
    display: flex;
    justify-content: center;
    align-items: start;
`;

const AboutCard = styled.div`
    width: calc(100% - 80px);
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 8px;
    position: sticky;
    top: 180px;
    padding: 40px;
    gap: 16px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-align: start;
`;

export default About;