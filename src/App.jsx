import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Route, Routes } from 'react-router-dom'

import Cube from './Cube'
import {DevName, InfoDirectory} from './Interface'
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Experience from './pages/Experience'

import './App.css'


function App() {
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Works" element={<Works />} />
        </Routes>
        <div className="OuterBackground">
      <div className="Frame"></div>
      </div>
      </div>
      <p style={{bottom:"-9px", left:"30px", position:"absolute"}}>This Site is made with ReactJS</p>
    </div>
  )
}

export default App
