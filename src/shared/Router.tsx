import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../components/common/MainLayout';
import SubLayout from '../components/common/SubLayout';
import Loading from '../components/common/Loading';
import SiteLayout from '../components/common/SiteLayout';

const StartPage = lazy(() => import("../pages/StartPage"));
const SkillsPage = lazy(() => import("../pages/SkillsPage"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const GameStartPage = lazy(() => import("../pages/GameStartPage"));
const ProjectInfoPage = lazy(() => import("../pages/ProjectInfoPage"));
const ConnectPage = lazy(() => import("../pages/ConnectPage"));
const SitePage = lazy(() => import("../pages/SitePage"));
const AboutUsPage = lazy(() => import("../pages/AboutMePage"));
const LobyPage = lazy(() => import("../pages/LobyPage"));
const ContactPage = lazy(() => import("../components/SitePage/Contact"));

const Router = () => {

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<StartPage />} caseSensitive />
              <Route path='/loby' element={<LobyPage />} caseSensitive />
              <Route path='/about' element={<AboutUsPage />} caseSensitive />
              <Route path='/skill' element={<SkillsPage />} caseSensitive />
              <Route path='/dungeon' element={<ProjectPage />} caseSensitive />
            </Route>
            <Route element={<SubLayout />}>
              <Route path='/dungeon/info' element={<ProjectInfoPage />} caseSensitive />
              <Route path='/gamestart' element={<GameStartPage />} caseSensitive />
            </Route>
            <Route element={<SiteLayout />}>
              <Route path='/jaelog' element={<SitePage />} caseSensitive />
              <Route path='/jaelog/contact' element={<ContactPage />} caseSensitive />
            </Route>
            <Route path='/connect' element={<ConnectPage />} caseSensitive />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;