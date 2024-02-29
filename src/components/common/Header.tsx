import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { RootState } from '../../store/config/configureStore';
import { pageMove } from '../../store/modules/pageState';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const windowPath = useSelector((state : RootState) => state.pageState);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("페이지 -> ", windowPath, "모바일 -> ", isMobile);

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <NavButton
          onClick={() => {
            dispatch(pageMove(""));
            navigate("/")
          }}>
          Main
        </NavButton>
        <NavButton
          onClick={() => {
            dispatch(pageMove("Loby"));
            navigate("/loby")
          }}>
          Loby
        </NavButton>
        <NavButton
          onClick={() => {
            dispatch(pageMove("About Us"));
            navigate("/about")
          }}>
          About Us
        </NavButton>
        <NavButton>
          Stacks
        </NavButton>
      </HeaderWrapper>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.header`
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 14;
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const NavButton = styled.a`
  width: 120px;
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

export default Header