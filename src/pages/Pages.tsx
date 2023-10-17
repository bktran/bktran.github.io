import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Nav from '../components/Nav'
import Skills from './Skills'
import Resume from './Resume'
import NotFound from './NotFound'

const Pages = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Pages