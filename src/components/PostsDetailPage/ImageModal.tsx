import React from 'react'
import styled from 'styled-components';
import { projectImage } from '../../utils/ProjectImage';
import { GrClose } from 'react-icons/gr';

interface ImageModalProps {
    img: any;
    setImg: React.Dispatch<React.SetStateAction<any>>;
    src: string;
};

const ImageModal = ({ img, setImg, src }: ImageModalProps) => {
  return (
    <Background>
        <ModalContainer $src={projectImage[src]}>
            <CloseButton onClick={() => setImg(null)}>
                <GrClose size={32} />
            </CloseButton>
        </ModalContainer>
    </Background>
  )
};

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 25;
    background-color: #00000080;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div<{ $src: string }>`
    width: 100%;
    height: 80%;
    background-image: url(${(props) => props.$src});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (max-width: 980px) {
        width: 94%;
        height: 84%;
    }
`;

const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    top: -20px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: transparent;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: #949494;
    }

    @media screen and (max-width: 980px) {
        width: 24px;
        height: 24px;
        top: auto;
        bottom: 0;
        right: calc(50% - 20px);
    }
`;

export default ImageModal;