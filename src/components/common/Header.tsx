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

const Header = () => {

  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  // const [headerOpen, setHeaderOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 500);

  // const onClickHeaderOpenHandler = () => {
  //   if (headerRef.current) {
  //     if (headerOpen) {
  //       setHeaderOpen(false);
  //       headerRef.current.style.transform = "translateX(0%)";
  //     } else {
  //       setHeaderOpen(true);
  //       headerRef.current.style.transform = "translateX(100%)";
  //     };
  //   };
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("모바일 -> ", isMobile);

  return (
    <HeaderLayout ref={headerRef}>
      {/* <Button onClick={onClickHeaderOpenHandler}>a</Button> */}
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
          Stacks
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
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
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
`;

const ButtonIcons = styled.div`
  font-size: 60px;
`;

export default Header