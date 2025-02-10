import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteHeader from '../SitePage/SiteHeader';
import Profile from '../SitePage/Profile';
import { IoGameController } from "react-icons/io5";
import { Outlet } from 'react-router-dom';
import { commonBgColor, commonTextColor } from '../../styles/colorToken';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { LiaArrowUpSolid } from "react-icons/lia";

const SiteLayout = () => {

  const path = window.location.pathname;
  const theme = useSelector((state: RootState) => state.darkMode);
  const [scroll, setScroll] = useState<number>(window.scrollY);

  const onClickTopHandler = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const scrollEvent = () => {
      const y = window.scrollY;
      setScroll(y);
    };

    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    }
  }, []);

  return (
    <SiteContainer>
      <SiteHeader />
      {(path === "/" || path === "/jaelog/resume") && <Profile />}
      <Outlet />
      <FloatingButton
        $color={commonTextColor[theme]}
        onClick={onClickTopHandler}
        $display={(scroll > 200) ? 'flex' : 'none'}>
        <LiaArrowUpSolid />
      </FloatingButton>
      <GameModeButton
        title='게임모드로 이동'
        href='/gamemode'>
        <IoGameController />
      </GameModeButton>
    </SiteContainer>
  )
};

const SiteContainer = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px auto;
  padding-top: 100px;
  font-family: "SUIT_Regular";

  @media screen and (max-width: 980px) {
    width: 94%;
    padding-top: 70px;
  }
`;

const FloatingButton = styled.button<{ $color: string, $display: string }>`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 20;
  outline: none;
  border: none;
  background-color: ${(props) => props.$color}47;
  color: #ffffff;
  border-radius: 100%;
  transition: all 0.3s;
  font-size: 20px;
  display: ${(props) => props.$display};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$color}80;
  }

  @media screen and (max-width: 980px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    bottom: 10px;
    right: 10px;
  }
`;

const GameModeButton = styled.a`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 78px;
  right: 20px;
  z-index: 20;
  outline: none;
  border: none;
  background-color: #ee6e6e;
  box-shadow: 2px 2px 4px 0px #560c0c80;
  color: #ffffff;
  border-radius: 100%;
  transition: all 0.3s;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #cb4747;
  }

  @media screen and (max-width: 980px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    bottom: 48px;
    right: 10px;
  }
`;

export default SiteLayout;