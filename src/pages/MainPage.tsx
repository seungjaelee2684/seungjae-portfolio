import React from 'react'
import styled from 'styled-components';
import Header from '../components/common/Header';

const MainPage = () => {
  return (
    <MainPageLayout>
        <MainBanner>
            <BannerContent>
                <IntroText>
                    방문해주셔서 감사합니다
                </IntroText>
                <IntroText>
                    프론트엔드 개발자 이승재입니다
                </IntroText>
            </BannerContent>
        </MainBanner>
    </MainPageLayout>
  )
};

const MainPageLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

`;

const MainBanner = styled.section`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const BannerContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
`;

const IntroText = styled.p`
    width: 100%;
    font-size: 2.5em;
    font-weight: 700;
    text-align: start;
`;

export default MainPage;