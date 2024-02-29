import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { RootState } from '../../store/config/configureStore';
import { pageMove } from '../../store/modules/pageState';

const Header = () => {

  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerOpen, setHeaderOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 500);

  const onClickHeaderOpenHandler = () => {
    if (headerRef.current) {
      if (headerOpen) {
        setHeaderOpen(false);
        headerRef.current.style.transform = "translateX(0%)";
      } else {
        setHeaderOpen(true);
        headerRef.current.style.transform = "translateX(100%)";
      };
    };
  };

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
      <Button onClick={onClickHeaderOpenHandler}>a</Button>
      <HeaderWrapper>
        <NavButton
          width={40}
          onClick={() => {
            navigate("/")
          }}>
          Main
        </NavButton>
        <NavButton
          width={30}
          onClick={() => {
            navigate("/loby")
          }}>
          Loby
        </NavButton>
        <NavButton
          width={20}
          onClick={() => {
            navigate("/about")
          }}>
          About Us
        </NavButton>
        <NavButton
          width={10}>
          Stacks
        </NavButton>
      </HeaderWrapper>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.header`
  position: fixed;
  top: 10%;
  left: -162px;
  z-index: 14;
  transition: all 0.4s ease-out;
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const NavButton = styled.a<{ width : number }>`
  width: ${(props) => props.width + 120}px;
  height: 40px;
  border-top: 1px solid #e6ca9b;
  border-bottom: 1px solid #e6ca9b;
  border-right: 1px solid #e6ca9b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GongGothicMedium";
  font-size: 20px;
  color: #FFFFFF;
  transition: all 0.3s;
  cursor: pointer;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  position: absolute;
  top: -40px;
  right: -40px;
  z-index: 15;
  cursor: pointer;
`;

export default Header