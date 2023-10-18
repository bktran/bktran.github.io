import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='grid grid-flow-col gap-4 justify-between px-4 py-4 mt-4 drop-shadow-[0px_2px_3px_black]'>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "font-satisfy font-bold text-xl drop-shadow-white" :
              "text-calltoaction text-extrabold text-lg links"}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "font-satisfy font-bold text-xl drop-shadow-white" :
              "text-calltoaction text-extrabold text-lg links"}>
          Projects
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) =>
            isActive ? "font-satisfy font-bold text-xl drop-shadow-white" :
              "text-calltoaction text-extrabold text-lg links"}>
          Resume
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) =>
            isActive ? "font-satisfy font-bold text-xl drop-shadow-white" :
              "text-calltoaction text-extrabold text-lg links"}>
          Skills
        </NavLink>
      </div>
    </>
  )
}

export default Nav