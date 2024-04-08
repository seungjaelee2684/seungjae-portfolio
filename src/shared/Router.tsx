import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LobyPage from '../pages/LobyPage';
import { AnimatePresence } from 'framer-motion';
import AboutUsPage from '../pages/AboutMePage';
import MainLayout from '../components/common/MainLayout';
import StartPage from '../pages/StartPage';
import SkillsPage from '../pages/SkillsPage';
import ProjectPage from '../pages/ProjectPage';
import GameStartPage from '../pages/GameStartPage';
import ProjectInfoPage from '../pages/ProjectInfoPage';
import SubLayout from '../components/common/SubLayout';
import ConnectPage from '../pages/ConnectPage';
import SitePage from '../pages/SitePage';

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<StartPage />} />
            <Route path='/loby' element={<LobyPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/skill' element={<SkillsPage />} />
            <Route path='/dungeon' element={<ProjectPage />} />
          </Route>
          <Route element={<SubLayout />}>
            <Route path='/dungeon/info' element={<ProjectInfoPage />} />
            <Route path='/gamestart' element={<GameStartPage />} />
          </Route>
          <Route path='/connect' element={<ConnectPage />} />
          <Route path='/website' element={<SitePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;