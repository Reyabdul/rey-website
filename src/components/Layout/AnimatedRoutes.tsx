// import React from 'react'
import { Routes, Route } from "react-router"
import { AnimatePresence } from "motion/react"
//Components
import { Layout } from "./Layout"
import { Home } from "../../pages/Home"
import { About } from "../../pages/About"

export const AnimatedRoutes = () => {
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>  )
}
