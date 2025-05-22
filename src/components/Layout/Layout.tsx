// import React from 'react'
import { Navbar } from "./Navbar"
import { Footer } from './Footer';
import {motion} from 'framer-motion'
import { Outlet } from "react-router"
import { Background } from "./Background";



export const Layout = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="pt-20 px-4 max-w-6xl mx-auto"
      >
      </motion.main>
      <Footer />
      <Background />
      <Outlet />
    </div>
  )
}
