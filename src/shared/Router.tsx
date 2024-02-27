import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { AnimatePresence } from 'framer-motion';
import AboutUsPage from '../pages/AboutMePage';
import MainLayout from '../components/common/MainLayout';

const Router = () => {
  return (
    <BrowserRouter>
        <AnimatePresence>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutUsPage />} />
              </Route>
            </Routes>
        </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;