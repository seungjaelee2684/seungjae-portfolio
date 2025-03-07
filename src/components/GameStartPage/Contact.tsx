import React from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';
import { MdArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    return (
        <ContactContainer>
            <LaneContainer onClick={() => {
                navigate("/connect");
            }}>
                <Icon>
                    <MdArrowRight />
                </Icon>
                대화하기
            </LaneContainer>
            <LaneContainer onClick={() => {
                navigate("/");
            }}>
                <Icon>
                    <MdArrowRight />
                </Icon>
                포기하기
            </LaneContainer>
        </ContactContainer>
    )
};

const FadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scaleY(0);
    }

    100% {
        opacity: 1;
        transform: scaleY(1);
    }
`;

export const ContactContainer = styled.nav`
    width: 280px;
    position: absolute;
    opacity: 0;
    bottom: 105%;
    right: 20px;
    background-image: linear-gradient(to top, #354462b1, #24292fb1);
    animation: ${FadeIn} 0.5s ease-out forwards 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    @media screen and (max-width: 1320px) {
        width: 250px;
        font-size: 16px;
    }

    @media screen and (max-width: 500px) {
        width: 180px;
        right: 10px;
        font-size: 12px;
    }
`;

export const Icon = styled.div`
    min-width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        min-width: 20px;
        font-size: 18px;
    }

    @media screen and (max-width: 500px) {
        min-width: 16px;
        font-size: 12px;
    }
`;

export const LaneContainer = styled.a`
    width: calc(100% - 30px);
    height: 54px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;

    &:hover {
        color: #ADADAD;
    }

    &:hover ${Icon} {
        opacity: 1;
    }

    @media screen and (max-width: 1320px) {
        padding-left: 20px;
    }

    @media screen and (max-width: 500px) {
        padding-left: 10px;
        height: 40px;
    }
`;

export default Contact;