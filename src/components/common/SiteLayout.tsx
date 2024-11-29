import React from 'react'
import styled from 'styled-components';
import SiteHeader from '../SitePage/SiteHeader';
import Profile from '../SitePage/Profile';
import SideTap from '../SitePage/SideTap';
import { Outlet } from 'react-router-dom';

const SiteLayout = () => {

  return (
    <SiteContainer>
      <SiteHeader />
      <Profile />
      <SiteWrapper>
        <SideTap />
        <Outlet />
      </SiteWrapper>
    </SiteContainer>
  )
};

const SiteContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px auto;
  font-family: "SUIT_Regular";

  @media screen and (max-width: 900px) {
    width: 94%;
  }
`;

const SiteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export default SiteLayout;