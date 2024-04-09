import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import { LuCheckCircle } from "react-icons/lu";

interface CopyAlertProps {
    setIsCopy: React.Dispatch<React.SetStateAction<boolean>>;
};

const CopyAlert : React.FC<CopyAlertProps> = ({ setIsCopy }) => {

    const copyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
          if (copyRef.current) {
            copyRef.current.style.transition = "all 0.3s ease-out";
            copyRef.current.style.transform = "translateY(-10px)";
            copyRef.current.style.opacity = "0";
          };
        }, 2500);
        setTimeout(() => {
          setIsCopy(false);
        }, 2800);
      }, []);

    return (
        <AlertContainer ref={copyRef}>
            <LuCheckCircle style={{color: "#b0d98f"}} />
            복사가 완료되었습니다.
        </AlertContainer>
    )
};

const AlertAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AlertContainer = styled.div`
  width: 380px;
  height: 30px;
  border-radius: 10px;
  background-color: #514d4dd6;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  left: calc(50% - 190px);
  gap: 10px;
  color: #FCFCFC;
  animation: ${AlertAppear} 0.3s ease-out;

  @media screen and (max-width: 500px) {
    width: 280px;
    font-size: 12px;
    left: calc(50% - 140px);
  }
`;

export default CopyAlert;