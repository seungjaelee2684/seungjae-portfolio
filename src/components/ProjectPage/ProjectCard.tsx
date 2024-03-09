import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { projectDto } from '../../utils/Projects';

interface ProjectCardProps {
    item: any;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ProjectCard : React.FC<ProjectCardProps> = ({ item, step, setStep }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const movement = (e: any) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let rotateX = 1 / 10 * y - 20;
            let rotateY = -1 / 12 * x + 20;

            if (containerRef.current && overlayRef.current && effectRef.current) {
                containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                overlayRef.current.style.filter = "brightness(1.2) opacity(0.8)";
                overlayRef.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
                effectRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffffff7d 10%, transparent 50%)`;
            };
        };

        const mouseOut = () => {
            if (containerRef.current && overlayRef.current && effectRef.current) {
                containerRef.current.style.transform = "perspective(350px) rotateY(0deg) rotateX(0deg)";
                overlayRef.current.style.filter = "opacity(0)";
                effectRef.current.style.background = "none";
            };
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('mousemove', movement);
            containerRef.current.addEventListener('mouseleave', mouseOut);
        };

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', movement);
                containerRef.current.removeEventListener('mouseleave', mouseOut);
            };
        }
    }, []);

    return (
        <ProjectCardBox ref={containerRef}>
            <WhiteGradient ref={effectRef} />
            <CardImage src={item?.thumbnail}>
                <Overlay ref={overlayRef} />
            </CardImage>
            <CardContent>
                <ProjectTitle>
                    {item?.project}
                </ProjectTitle>
                <Period>
                    {item?.period}
                </Period>
            </CardContent>
        </ProjectCardBox>
    )
};

const ProjectCardBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    transition: all 0.1s;
    border-radius: 10px;
    border: 1px solid #177edf6a;
    background-color: #177edf6a;
    box-shadow: #177edf95 0px 0px 5px 0px;
    cursor: pointer;
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(105deg,
        transparent 40%,
        rgba(255, 219, 112, 0.8) 45%,
        rgba(132, 50, 255, 0.6) 50%,
        transparent 54%);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    filter: brightness(1.2) opacity(0);
`;

const WhiteGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
`;

const CardImage = styled.div<{ src: string }>`
    width: 100%;
    min-height: 280px;
    background-image: url(${(props) => props.src});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: aliceblue;
    line-height: 140%;
`;

const ProjectTitle = styled.div`
    font-size: 24px;
`;

const Period = styled.div`
    font-size: 16px;
`;

export default ProjectCard;