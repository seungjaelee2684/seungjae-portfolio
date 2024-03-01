import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { RootState } from '../../store/config/configureStore';
import { pageMove } from '../../store/modules/pageState';
import { LiaGripfire } from "react-icons/lia";
import { GoHomeFill } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { GrContactInfo } from "react-icons/gr";
import { mobileView } from '../../store/modules/isMobile';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useSelector((state : RootState) => state.isMobile);

  useEffect(() => {
    const handleResize = () => {
      dispatch(mobileView(window.innerWidth <= 500));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  console.log("모바일 -> ", isMobile);

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <NavButton
          onClick={() => {
            navigate("/")
          }}>
          <ButtonIcons>
            <GoHomeFill />
          </ButtonIcons>
          Main
        </NavButton>
        <NavButton
          onClick={() => {
            navigate("/loby")
          }}>
          <ButtonIcons>
            <HiUsers />
          </ButtonIcons>
          Charactor
        </NavButton>
        <NavButton
          onClick={() => {
            navigate("/about")
          }}>
          <ButtonIcons>
            <GrContactInfo />
          </ButtonIcons>
          About Us
        </NavButton>
        <NavButton
          onClick={() => {
            navigate("/stack")
          }}>
          <ButtonIcons>
            <LiaGripfire />
          </ButtonIcons>
          Skills
        </NavButton>
      </HeaderWrapper>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.header`
  position: fixed;
  top: 20%;
  left: 20px;
  z-index: 14;
  transition: all 0.4s ease-out;

  @media screen and (max-width: 1320px) {
    top: 70px;
    left: auto;
    right: 10px;
  }

  @media screen and (max-width: 500px) {
    top: auto;
    bottom: 10px;
    right: 0;
    width: calc(100% - 40px);
    padding: 0px 20px;
  }
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;

  @media screen and (max-width: 1320px) {
    flex-direction: row;
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    gap: 0px;
    justify-content: space-between;
  }
`;

const NavButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "GongGothicMedium";
  font-size: 16px;
  line-height: 100%;
  color: #aea8c4ac;
  text-shadow: 1px 1px 2px #6b6777;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #aea8c4;
    text-shadow: 1px 1px 2px #3b3942;
  }

  @media screen and (max-width: 1320px) {
    font-size: 14px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    gap: 2px;
  }
`;

const ButtonIcons = styled.div`
  font-size: 60px;

  @media screen and (max-width: 1320px) {
    font-size: 55px;
  }

  @media screen and (max-width: 836px) {
    font-size: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export default Header