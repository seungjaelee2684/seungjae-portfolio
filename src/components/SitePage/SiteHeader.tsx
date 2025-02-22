import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { darkModeAction } from '../../store/modules/darkMode';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { commonBgColor, commonTextColor } from '../../styles/colorToken';
import { sizeAction } from '../../store/modules/fontSize';

const SiteHeader = () => {

    const dispatch = useDispatch();
    const path = window.location.pathname;
    const theme = useSelector((state: RootState) => state.darkMode);
    const size = useSelector((state: RootState) => state.fontSize);
    const themeAction = 1 - theme;
    const isDark = (theme === 1) ? true : false;

    const toggleRef = useRef<HTMLDivElement>(null);
    const [tapOpen, setTapOpen] = useState<boolean>(false);

    const fontList = ['14px', '16px', '18px', '20px', '24px'];

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
                <HeaderRightWrapper>
                    {/* {(path === '/')
                        && <FontSize
                            $color={commonTextColor[theme]}
                            onClick={() => setTapOpen(!tapOpen)}>
                            {size}
                            <MdKeyboardArrowDown />
                            {(tapOpen)
                                && <FontSizeModal $bgcolor={commonBgColor[theme]}>
                                    {fontList.map((item: any, index: number) =>
                                        <FontSizeModalLane
                                            key={index}
                                            $color={commonTextColor[theme]}
                                            $checked={size === item}
                                            onClick={() => dispatch(sizeAction(item))}>
                                            {item}
                                        </FontSizeModalLane>)}
                                </FontSizeModal>}
                        </FontSize>} */}
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
                </HeaderRightWrapper>
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

    @media screen and (max-width: 1140px) {
        height: 60px;
    }
`;

const SiteHeaderInWrapper = styled.nav`
    width: 1140px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1140px) {
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

    @media screen and (max-width: 1140px) {
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

    @media screen and (max-width: 1140px) {
        width: 4px;
        height: 4px;
    }
`;

const HeaderRightWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
`;

const FontSize = styled.button<{ $color: string }>`
    padding: 6px 16px;
    font-size: 1em;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.$color};
    background-color: transparent;
    border: 1px solid #ffd7d7;
    border-radius: 30px;
    transition: all 0.3s;
    position: relative;
    cursor: pointer;

    &:hover {
        border: 1px solid #ee6e6e;
    }
`;

const FontSizeModal = styled.ul<{ $bgcolor: string }>`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 4px;
    position: absolute;
    top: 38px;
    left: 0;
    z-index: 26;
    background-color: ${(props) => props.$bgcolor};
    border: 1px solid #ffd7d7;
    border-radius: 10px;
    padding: 4px;
`;

const FontSizeModalLane = styled.li<{ $color: string, $checked: boolean }>`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 4px 10px;
    margin-left: 0px;
    border-radius: 20px;
    transition: all 0.3s;
    background-color: ${(props) => props.$checked ? '#ee6e6e' : 'transparent'};
    color: ${(props) => props.$checked ? '#ffffff' : props.$color};

    &:hover {
        color: ${(props) => props.$checked ? '#ffffff' : '#ee6e6e'};
    }
`;

const ThemeWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;

    @media screen and (max-width: 1140px) {
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

    @media screen and (max-width: 1140px) {
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

    @media screen and (max-width: 1140px) {
        width: 14px;
        max-width: 14px;
        height: 14px;
        max-height: 14px;
    }
`;

export default SiteHeader;