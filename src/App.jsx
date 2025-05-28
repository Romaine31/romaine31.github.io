import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

import Cube from './Cube'
import {DevName, InfoDirectory} from './Interface'
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Experience from './pages/Experience'

import './App.css'


function App() {
  const location = useLocation();

  return (
    <div className='CanvasContainer'>
      <Canvas>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/modern_bathroom_1k.hdr" resolution={1024} />
        <color attach="background" args={['#121214']} />
        <Cube />
      </Canvas>
      <div className='LeftPanel'>
        <DevName />
        <InfoDirectory />
        <Contact />
      </div>
      <div className='NavigationContainer'>
        <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/Experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/Works" element={<PageWrapper><Works /></PageWrapper>} />
        </Routes>
        </AnimatePresence>
        <div className="OuterBackground">
      <div className="Frame"></div>
      </div>
      </div>
      <p style={{bottom:"-9px", left:"30px", position:"absolute"}}>may not properly render on mobile. This Site is made with ReactJS, This site may change over time as it is actively being worked on.</p>
    </div>
  )
}

function PageWrapper({ children }) {
  return(
    <motion.div
    initial = {{ opacity: 0}}
    animate = {{ opacity: 1}}
    exit = {{ opacity: 0}}
    transition={{ duration: 0.3}}
    >
      {children}
    </motion.div>
  )
}


export default App
