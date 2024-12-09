import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { commonBgColor } from '../../styles/colorToken';

interface DropDownMenuProps {
  option?: any;
  type?: boolean;
  value?: string | null;
  setValue?: React.Dispatch<React.SetStateAction<string | null>>;
};

const DropDownMenu = ({ option, type, value, setValue }: DropDownMenuProps) => {

  const theme = useSelector((state: RootState) => state.darkMode);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickOpenHandler = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onClickSelectHandler = (e: any, item: any) => {
    e.preventDefault();
    if (!setValue || !option) return;
    const typeValue = (type) ? item?.category : item?.connection
    setValue(typeValue);
    setIsOpen(false);
  };

  const nodeChange = () => {
    if (!option) return;
    return (
      option?.map((item: any, index: number) =>
        <DropDownList
          key={index}
          onClick={(e) => onClickSelectHandler(e, item)}>
          {(type) ? item?.category : item?.connection}
        </DropDownList>
      )
    )
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropDownWrapper ref={dropdownRef}>
      <DropDownRender>
        {(value) ? value : "선택지를 고르세요."}
        {(isOpen)
          && <DropDownMenuBox
            $bgcolor={commonBgColor[theme]}>
            {nodeChange()}
          </DropDownMenuBox>}
      </DropDownRender>
      <DropDownButton onClick={onClickOpenHandler}>
        <IoIosArrowDown style={{ fontSize: '24px' }} />
      </DropDownButton>
    </DropDownWrapper>
  )
};

const DropDownWrapper = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
`;

const DropDownRender = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 12px;
  font-size: 14px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-left: 1px solid #b8b8b8;
  border-top: 1px solid #b8b8b8;
  border-bottom: 1px solid #b8b8b8;
  user-select: none;
  position: relative;
`;

const DropDownButton = styled.button`
  min-width: 38px;
  width: 38px;
  height: 100%;
  border: 1px solid;
  color: #b8b8b8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  padding: 0px 12px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    border: 1px solid #ee6e6e;
    background-color: #ee6e6e;
  }
`;

const DropDownMenuBox = styled.ul<{ $bgcolor: string }>`
  width: calc(100% + 1px);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  overflow-y: auto;
  border: 1px solid #b8b8b8;
  background-color: ${(props) => props.$bgcolor};
  position: absolute;
  top: 38px;
  left: -0.5px;
  right: 0;
  z-index: 19;
  padding: 8px 4px;
  box-shadow: 0px 4px 4px 0px #0000002b;
`;

const DropDownList = styled.li`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  color: #5b5b5b;
  border-radius: 8px;
  padding: 0px 8px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ee6e6eb7;
    color: #ffffff;
    font-weight: 700;
  }
`;

export default DropDownMenu;