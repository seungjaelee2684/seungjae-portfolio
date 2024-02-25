import React from 'react'
import { motion } from 'framer-motion';
import { pageEffect } from '../../styles/animations';

const Wrapper = ({ children, ...rest } : any) => {
  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        variants={pageEffect}>
        {children}
    </motion.div>
  )
};

export default Wrapper;