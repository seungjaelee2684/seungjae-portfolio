import React from 'react'
import styled from 'styled-components';

interface WebHeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
};

const WebHeader : React.FC<WebHeaderProps> = ({ headerRef }) => {

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

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderContainer>
        <HeaderLogo onClick={onClickScrollTopHandler}>
          import SeungJae,
        </HeaderLogo>
        <RightContent>
          {"{"}
          <Navigate onClick={() => onClickMoveHandler("about us")}>
            About,
          </Navigate>
          <Navigate>
            Project,
          </Navigate>
          <Navigate>
            Skill,
          </Navigate>
          <Navigate>
            Contact
          </Navigate>
          {"} from 'Lee SeungJae'"}
        </RightContent>
      </HeaderContainer>
    </HeaderLayout>
  )
};

const HeaderLayout = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "D2Coding";
  user-select: none;
  transition: all 0.2s;
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const HeaderLogo = styled.div`
  font-size: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    font-size: 32px;
  }

  &:hover {
    color: #ADADAD;
  }
`;

const RightContent = styled.nav`
  font-size: 20px;
  line-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #bebebe;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }
`;

const Navigate = styled.a`
  font-size: 24px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    color: #ADADAD;
  }

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }
`;

export default WebHeader;