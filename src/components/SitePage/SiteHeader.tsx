import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { darkModeAction } from '../../store/modules/darkMode';
import { commonBgColor } from '../../styles/colorToken';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const SiteHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.darkMode);
    const themeAction = 1 - theme;
    const isDark = (theme === 1) ? true : false;

    const toggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!toggleRef.current) return;

        if (isDark) {
            toggleRef.current.style.transform = 'translateX(110%)';
            toggleRef.current.style.backgroundColor = '#25afee';
        } else {
            toggleRef.current.style.transform = 'translateX(0%)';
            toggleRef.current.style.backgroundColor = '#f2c138';
        };
    }, [isDark]);

    return (
        <SiteHeaderContainer>
            <SiteHeaderInWrapper>
                <HeaderLink href='/' title='블로그 홈'>
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
                    </ThemeToggle>
                    <BsMoonStarsFill
                        color='#25afee'
                        style={{
                            transition: 'all 0.3s',
                            opacity: (isDark) ? '1' : '0',
                            transform: (isDark) ? 'translateY(0px)' : 'translateY(20px)',
                            fontSize: '15px'
                        }} />
                </ThemeWrapper>
            </SiteHeaderInWrapper>
        </SiteHeaderContainer>
    )
};

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

    @media screen and (max-width: 980px) {
        height: 60px;
    }
`;

const SiteHeaderInWrapper = styled.nav`
    width: 980px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 980px) {
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

    @media screen and (max-width: 980px) {
        font-size: 20px;
        gap: 2px;
    }
`;

const HeaderLinkIcon = styled.span`
    width: 6px;
    height: 6px;
    margin-bottom: 4px;
    border-radius: 100%;
    background-color: #ee6e6e;

    @media screen and (max-width: 980px) {
        width: 4px;
        height: 4px;
    }
`;

const ThemeWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;

    @media screen and (max-width: 980px) {
        gap: 4px;
        font-size: 20px;
    }
`;

const ThemeToggle = styled.button`
    width: 46px;
    height: 24px;
    border-radius: 30px;
    padding: 0px 2px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background-color: #ffffff;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 980px) {
        width: 38px;
        height: 20px;
    }
`;

const ToggleCircle = styled.div`
    width: 18px;
    max-width: 18px;
    height: 18px;
    max-height: 18px;
    border-radius: 100%;
    background-color: #ffffff;
    transition: all 0.3s;

    @media screen and (max-width: 980px) {
        width: 14px;
        max-width: 14px;
        height: 14px;
        max-height: 14px;
    }
`;

export default SiteHeader;