import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SiteHeader from '../SitePage/SiteHeader';
import Profile from '../SitePage/Profile';
import SideTap from '../SitePage/SideTap';
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
      {(path === "/jaelog") && <Profile />}
      <Outlet />
      <FloatingButton
        $opacity={(scroll > 200) ? '1' : '0'}
        $color={commonTextColor[theme]}
        onClick={onClickTopHandler}>
        <LiaArrowUpSolid />
      </FloatingButton>
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
  }
`;

const FloatingButton = styled.button<{ $opacity: string, $color: string }>`
  width: 40px;
  height: 40px;
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
  opacity: ${(props) => props.$opacity};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$color}80;
  }
`;

export default SiteLayout;