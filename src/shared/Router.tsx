import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../components/common/MainLayout';
import SubLayout from '../components/common/SubLayout';
import Loading from '../components/common/Loading';
import SiteLayout from '../components/common/SiteLayout';

const MainPage = lazy(() => import("../pages/MainPage"));
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
const ProjectListPage = lazy(() => import("../pages/ProjectListPage"));
const PracticeListPage = lazy(() => import("../pages/PracticeListPage"));
const PostsDetailPage = lazy(() => import("../pages/PostsDetailPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ResumePage = lazy(() => import("../pages/ResumePage"));
const InsertPostPage = lazy(() => import("../pages/InsertPostPage"));
const PostOptionUpdate = lazy(() => import("../pages/PostOptionUpdate"));
const UpdatePostsPage = lazy(() => import("../pages/UpdatePostsPage"));

const Router = () => {

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/gamemode' element={<StartPage />} caseSensitive />
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
              {/* <Route path='/' element={<MainPage />} /> */}
              <Route path='/' element={<SitePage />} caseSensitive />
              <Route path='/jaelog/projects' element={<ProjectListPage />} caseSensitive />
              <Route path='/jaelog/practices' element={<PracticeListPage />} caseSensitive />
              <Route path='/jaelog/:post/:postId' element={<PostsDetailPage />} caseSensitive />
              <Route path='/jaelog/resume' element={<ResumePage />} caseSensitive />
              <Route path='/jaelog/insert' element={<InsertPostPage />} caseSensitive />
              <Route path='/jaelog/option/update' element={<PostOptionUpdate />} caseSensitive />
              <Route path='/jaelog/:post/update/:postId' element={<UpdatePostsPage />} caseSensitive />
            </Route>
            <Route path='/jaelog/login' element={<LoginPage />} caseSensitive />
            <Route path='/connect' element={<ConnectPage />} caseSensitive />
            <Route path='/contact' element={<ContactPage />} caseSensitive />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;