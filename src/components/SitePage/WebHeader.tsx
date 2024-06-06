import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';

interface WebHeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
  isScroll: boolean;
};

const WebHeader : React.FC<WebHeaderProps> = ({ headerRef, isScroll }) => {

  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  const onClickScrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const onClickMoveHandler = (id: string) => {
    const elementId = document.getElementById(id);

    if (elementId) {
      elementId.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const onMouseOverHandler = () => {
    
  };

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderContainer>
        <HeaderLogo
          color={(isScroll) ? "#222020" : "#FEFEFE"}
          hovercolor={(isScroll) ? "#ADADAD" : "#ADADAD"}
          onClick={onClickScrollTopHandler}>
          import SeungJae
        </HeaderLogo>
        <RightContent>
          <Navigate
            color={(isScroll) ? "#222020" : "#fefefea6"}
            hovercolor={(isScroll) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => onClickMoveHandler("about us")}
            onMouseOver={() => {
              if (!hoverRef.current) return;
              hoverRef.current.style.visibility = `visible`;
            }}
            onMouseLeave={() => {
              if (!hoverRef.current) return;
              hoverRef.current.style.visibility = `hidden`;
            }}>
            ABOUT
            <HoverContainer ref={hoverRef}>
              <HoverContent>
                <Navigate
                  color={(isScroll) ? "#222020" : "#fefefea6"}
                  hovercolor={(isScroll) ? "#ADADAD" : "#FEFEFE"}>
                    나에대해
                </Navigate>
              </HoverContent>
            </HoverContainer>
          </Navigate>
          <Navigate
            color={(isScroll) ? "#222020" : "#fefefea6"}
            hovercolor={(isScroll) ? "#ADADAD" : "#FEFEFE"}>
            PROJECT
          </Navigate>
          <Navigate
            color={(isScroll) ? "#222020" : "#fefefea6"}
            hovercolor={(isScroll) ? "#ADADAD" : "#FEFEFE"}>
            SKILL
          </Navigate>
          <Navigate
            color={(isScroll) ? "#222020" : "#fefefea6"}
            hovercolor={(isScroll) ? "#ADADAD" : "#FEFEFE"}>
            CONTACT
          </Navigate>
        </RightContent>
      </HeaderContainer>
    </HeaderLayout>
  )
};

const HeaderLayout = styled.header`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "D2Coding";
  user-select: none;
  transition: all 0.2s;
  position: fixed;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: #222020b0;
  }
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 160px;
  box-sizing: border-box;

  @media screen and (max-width: 1320px) {
    padding-right: 0px;
    width: 96%;
  }
`;

const HeaderLogo = styled.div<{ color: string, hovercolor: string }>`
  font-size: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    font-size: 24px;
  }

  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;

const RightContent = styled.nav`
  font-size: 16px;
  line-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1320px) {
    gap: 40px;
    font-size: 12px;
  }
`;

const Navigate = styled.a<{ color: string, hovercolor: string }>`
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor};
  }

  @media screen and (max-width: 1320px) {
    font-size: 18px;
  }
`;

const HoverContainer = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 80px;
  left: 0;
  visibility: hidden;
  background-color: #222020c3;
  z-index: 5;
`;

const HoverContent = styled.div`
  width: 1320px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 30px;
  padding-right: 300px;
  box-sizing: border-box;
`;

export default WebHeader;