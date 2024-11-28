import React from 'react'
import styled from 'styled-components';

const SideTap = () => {
  return (
    <SideTapContainer>
      SideTap
    </SideTapContainer>
  )
};

const SideTapContainer = styled.ul`
  min-width: 200px;
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default SideTap;