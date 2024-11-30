import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { darkModeAction } from '../../store/modules/darkMode';
import { commonBgColor } from '../../styles/colorToken';
import { BsFillBrightnessAltHighFill, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { CiCloudSun } from "react-icons/ci";
import { FaCloudSun } from 'react-icons/fa6';
import { WiStars } from "react-icons/wi";

const SiteHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.darkMode);
    const themeAction = 1 - theme;
    const isDark = (theme === 1) ? true : false;

    const toggleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!toggleRef.current || !textRef.current) return;

        if (isDark) {
            toggleRef.current.style.transform = 'translateX(34px)';
            toggleRef.current.style.backgroundColor = '#25afee';
            textRef.current.style.transform = 'translateX(-22px)';
            textRef.current.style.color = '#ffffff';
        } else {
            toggleRef.current.style.transform = 'translateX(0%)';
            toggleRef.current.style.backgroundColor = '#f2c138';
            textRef.current.style.transform = 'translateX(0px)';
            textRef.current.style.color = '#ffffff';
        };
    }, [isDark]);

    return (
        <SiteHeaderContainer>
            <SiteHeaderInWrapper>
                <HeaderLink href='/jaelog'>
                    Jaelog
                    <HeaderLinkIcon />
                </HeaderLink>
                <ThemeWrapper>
                    <BsSunFill
                        color='#f2c138'
                        style={{
                            transition: 'all 0.3s',
                            opacity: (isDark) ? '0' : '1',
                            transform: (isDark) ? 'translateY(20px)' : 'translateY(0px)'
                        }} />
                    <ThemeToggle
                        style={{
                            backgroundColor: (isDark) ? '#092e40' : '#fae9b1',
                            border: (isDark) ? '2px solid #25afee' : '2px solid #f2c138'
                        }}
                        onClick={() => dispatch(darkModeAction(themeAction))}>
                        <ToggleCircle ref={toggleRef} />
                        <ToggleText ref={textRef}>
                            {(isDark) ? <WiStars /> : <FaCloudSun />}
                        </ToggleText>
                    </ThemeToggle>
                    <BsMoonStarsFill
                        color='#25afee'
                        style={{
                            transition: 'all 0.3s',
                            opacity: (isDark) ? '1' : '0',
                            transform: (isDark) ? 'translateY(0px)' : 'translateY(20px)',
                            fontSize: '16px'
                        }} />
                </ThemeWrapper>
            </SiteHeaderInWrapper>
        </SiteHeaderContainer>
    )
};

const ToggleAnimation = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
`;

const SiteHeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 25;
    user-select: none;
    backdrop-filter: blur(3px);
`;

const SiteHeaderInWrapper = styled.nav`
    width: 900px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
        width: 94%;
    }
`;

const HeaderLink = styled.a`
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: end;
    gap: 4px;
    transition: all 0.3s;

    &:hover {
        color: #ee6e6e;
    }
`;

const HeaderLinkIcon = styled.span`
    width: 6px;
    height: 6px;
    margin-bottom: 4px;
    border-radius: 100%;
    background-color: #ee6e6e;
`;

const ThemeWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
`;

const ThemeToggle = styled.button`
    width: 60px;
    height: 28px;
    border-radius: 40px;
    padding: 0px 2px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background-color: #ffffff;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
`;

const ToggleText = styled.span`
    font-size: 24px;
    font-weight: 700;
    transition: all 0.3s;
    margin-top: 6px;
    animation: ${ToggleAnimation} 1.5s linear infinite forwards;
`;

const ToggleCircle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #ffffff;
    transition: all 0.3s;
`;

export default SiteHeader;