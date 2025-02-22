import React from 'react'
import styled, { keyframes } from 'styled-components';
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
                        프론트엔드 개발자 <StrongText>이승재</StrongText>입니다
                    </IntroText>
                </BannerContent>
                {/* <svg viewBox="0 0 72 72" className="css-0 e1t0g76a0">
                    <g transform="translate(-64 -531)">
                        <rect width="72" height="72" transform="translate(64 531)" fill="none">
                        </rect>
                        <Path d="M211.862,1168.227h43.684s0,39.292-36.029,46.187"
                            transform="translate(-133 -624)">
                        </Path>
                    </g>
                </svg> */}
                {/* <svg viewBox="0 0 72 72" className="css-0 e1t0g76a0">
                    <g transform="translate(-64 -531)">
                        <rect width="72" height="72" transform="translate(64 531)" fill="none"></rect>
                        <Path d="M 215 1165 V 1210 H 260"
                            transform="translate(-133 -624)">
                        </Path>
                    </g>
                </svg> */}
                {/* <svg viewBox="0 0 72 72" className="css-0 e1t0g76a0"><g transform="translate(-1762 -531)"><rect width="72" height="72" transform="translate(1762 531)" fill="none"></rect><g transform="translate(1776 541)"><path d="M1435,1192.459h1.21c11.007,0,19.93,5.927,19.93,13.238h0c0,7.311-8.923,13.238-19.93,13.238h-2.421c-11.007,0-19.929-5.927-19.929-13.238h0c0-7.312,8.922-13.238,19.929-13.238H1435" transform="translate(-1413.157 -1166.785)" fill="none" stroke="#D8E2E9" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="16" stroke-dasharray="270" stroke-dashoffset="270" style={{opacity: '1', strokeWidth: '16', strokeDasharray: '110.12', strokeDashoffset: "0"}}></path><line x2="43.684" transform="translate(0 12.609)" fill="none" stroke="#D8E2E9" stroke-linecap="square" stroke-miterlimit="10" stroke-width="16" stroke-dasharray="270" stroke-dashoffset="270" style={{opacity: '1', strokeWidth: '16', strokeDasharray: '110.12', strokeDashoffset: "0"}}></line><line y2="12.609" transform="translate(21.842 0)" fill="none" stroke="#D8E2E9" stroke-linecap="square" stroke-miterlimit="10" stroke-width="16" stroke-dasharray="270" stroke-dashoffset="270" style={{opacity: '1', strokeWidth: '16', strokeDasharray: '110.12', strokeDashoffset: "0"}}></line></g></g></svg> */}
            </MainBanner>
        </MainPageLayout>
    )
};

const Draw = keyframes`
    0% {
        stroke-dashoffset: 107.284;
        stroke-width: 16;
    }

    50% {
        stroke-dashoffset: 0;
        stroke-width: 16;
    }

    90% {
        stroke-dashoffset: 90;
        stroke-width: 8;
    }

    100% {
        stroke-dashoffset: 107.284;
        stroke-width: 8;
    }
`;

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

const StrongText = styled.strong`
    color: #ee6e6e;
`;

const Svg = styled.svg`
    width: 500px;
    height: 200px;
    background-color: #f9f9f9;
`;

const Path = styled.path`
    fill: none;
    stroke: #D8E2E9;
    stroke-linecap: square;
    stroke-miterlimit: 10;
    opacity: 1;
    stroke-width: 16;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    /* animation: ${Draw} 2s linear forwards; */
`;

export default MainPage;