import React from 'react';
import styled from 'styled-components';

const SiteHeader = () => {
  return (
    <SiteHeaderContainer>
        <SiteHeaderInWrapper>
            <HeaderLink href='/jaelog'>
                Jaelog
            </HeaderLink>
        </SiteHeaderInWrapper>
    </SiteHeaderContainer>
  )
};

const SiteHeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 25;
    user-select: none;
`;

const SiteHeaderInWrapper = styled.nav`
    width: 900px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
        width: 94%;
    }
`;

const HeaderLink = styled.a`
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`;

export default SiteHeader;