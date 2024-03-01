import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';

const StartPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageMove(""));
  }, []);

  return (
    <div>StartPage</div>
  )
};

export default StartPage;