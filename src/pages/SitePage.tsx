import React from 'react'
import styled from 'styled-components';
import WebHeader from '../components/SitePage/WebHeader';
import Banner from '../components/SitePage/Banner';

const SitePage = () => {
  return (
    <MainLayout>
      <WebHeader />
      <Banner />
      <MainContainer>
        SitePage
      </MainContainer>
    </MainLayout>
  )
};

const MainLayout = styled.article`
  width: 100%;
  position: relative;
  font-family: "TTLaundryGothicB";
  font-size: 400;
`;

const MainContainer = styled.div`
  width: 1320px;
  margin: 40px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

export default SitePage;