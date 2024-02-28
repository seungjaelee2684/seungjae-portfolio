import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <NavButton onClick={() => navigate("/")}>
          Loby
        </NavButton>
        <NavButton onClick={() => navigate("/main")}>
          Main
        </NavButton>
        <NavButton onClick={() => navigate("/about")}>
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