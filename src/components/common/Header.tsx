import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { RootState } from '../../store/config/configureStore';
import { pageMove } from '../../store/modules/pageState';
import { mobileView } from '../../store/modules/isMobile';
import { headerHtml } from '../../utils/NaviHTML';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGuide = localStorage.getItem("guide");
  const guide = useSelector((state: RootState) => state.guide);
  const page = useSelector((state : RootState) => state.pageState);
  const isMobile = useSelector((state : RootState) => state.isMobile);
  const naviList : string[] = ["Main", "Character", "About Us", "Skills", "Dungeon"];
  const [innerContent, setInnerContent] = useState<string[]>(naviList);

  useEffect(() => {
    const handleResize = () => {
      dispatch(mobileView(window.innerWidth <= 500));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <HeaderLayout>
      <HeaderWrapper>
        {headerHtml?.map((item: any, index: number) => {
          return (
            <NavButton
              key={item?.id}
              style={{color: `${(page === item?.content) ? "#d2cbe9" : ""}`}}
              onClick={() => {
                if (isGuide) {
                  localStorage.setItem("guide", item?.url.slice(1));
                };
                navigate(`${item?.url}`); 
              }}
              onMouseEnter={() => { // 마우스 올렸을 때 텍스트의 순서가 바뀌게 애니메이션 구현
                let i = 0
                const interval = setInterval(() => {
                  if (innerContent[index]?.length > i) {
                    let text = innerContent[index];
                    let index1 = i;
                    let index2 = i + 1;
                    let strArr = text.split("");
                    let temp = strArr[index1];
                    strArr[index1] = strArr[index2];
                    strArr[index2] = temp;

                    let modifiedStr = strArr.join("");
                    const newInnerContent = [...innerContent];
                    newInnerContent[index] = modifiedStr;
                    setInnerContent(newInnerContent);
                    i++;
                  } else {
                    clearInterval(interval);
                  };
                }, 70);
              }}
              onMouseLeave={() => {
                setInnerContent(naviList);
              }}>
              <ButtonIcons>
                {item?.icon}
              </ButtonIcons>
              {innerContent[index]}
            </NavButton>
          )
        })}
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

  @media screen and (max-width: 1600px) {
    top: 70px;
    left: 10px;
  }

  @media screen and (max-width: 500px) {
    top: auto;
    bottom: 10px;
    left: 0;
    width: 100%;
  }
`;

const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;

  @media screen and (max-width: 1600px) {
    gap: 30px;
  }

  @media screen and (max-width: 970px) {
    flex-direction: row;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    gap: 0px;
    justify-content: space-around;
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
    color: #d2cbe9;
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