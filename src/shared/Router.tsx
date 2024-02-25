import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { AnimatePresence } from 'framer-motion';
import AboutUsPage from '../pages/AboutUsPage';

const Router = () => {
  return (
    <BrowserRouter>
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutUsPage />} />
            </Routes>
        </AnimatePresence>
    </BrowserRouter>
  )
};

export default Router;