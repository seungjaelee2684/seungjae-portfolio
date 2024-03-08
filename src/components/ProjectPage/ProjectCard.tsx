import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const ProjectCard = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const movement = (e: any) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let rotateX = 4 / 30 * y - 20;
            let rotateY = -1 / 5 * x + 20;

            if (containerRef.current && overlayRef.current && effectRef.current) {
                containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                overlayRef.current.style.filter = "brightness(1.2) opacity(0.8)";
                overlayRef.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
                effectRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffffff3e 10%, transparent 80%)`;
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
            <Overlay ref={overlayRef} />
            <WhiteGradient ref={effectRef} />
            ProjectPage
        </ProjectCardBox>
    )
};

const ProjectCardBox = styled.div`
    width: 220px;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    transition: all 0.1s;
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
`;

const WhiteGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 30% 10%, #ffffff3e 10%, transparent 80%);
    background-size: cover;
`;

export default ProjectCard;