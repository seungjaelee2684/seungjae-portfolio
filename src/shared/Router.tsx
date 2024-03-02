import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LobyPage from '../pages/LobyPage';
import { AnimatePresence } from 'framer-motion';
import AboutUsPage from '../pages/AboutMePage';
import MainLayout from '../components/common/MainLayout';
import StartPage from '../pages/StartPage';
import Header from '../components/common/Header';
import SkillsPage from '../pages/SkillsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<StartPage />} />
            <Route path='/loby' element={<LobyPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/skill' element={<SkillsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;