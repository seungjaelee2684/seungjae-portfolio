import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InBoxContainer } from './AboutMePage';
import { useDispatch } from 'react-redux';
import { pageMove } from '../store/modules/pageState';

const SkillsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageMove("Skills"));
  }, []);

  return (
    <InBoxContainer>
      SkillsPage
    </InBoxContainer>
  )
};

export default SkillsPage;