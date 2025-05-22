import { Routes, Route, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"
//Pages
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"

//Animation for Routing
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

/*
========================================
APP
======================================== */

export default function App() {

  return (
    <>
    <Navbar />
      <AnimatedRoutes />
    </>
  )
}

