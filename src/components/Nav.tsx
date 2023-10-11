import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='grid grid-flow-col gap-4 justify-between px-4 py-4 mt-4 drop-shadow-[0px_2px_3px_black]'>
        <NavLink to="/" className={({ isActive, isPending }) =>
          isPending ? "pending" :
            isActive ? "font-satisfy font-bold text-xl drop-shadow-[0_2px_3px_white]" :
              "text-calltoaction text-extrabold text-lg lg:hover:border-b-2 hover:border-calltoaction"}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive, isPending }) =>
          isPending ? "pending" :
            isActive ? "font-satisfy font-bold text-xl drop-shadow-[0_2px_3px_white]" :
              "text-calltoaction text-extrabold text-lg lg:hover:border-b-2 hover:border-calltoaction"}>
          Projects
        </NavLink>
        <NavLink to="/resume" className={({ isActive, isPending }) =>
          isPending ? "pending" :
            isActive ? "font-satisfy font-bold text-xl drop-shadow-[0_2px_3px_white]" :
              "text-calltoaction text-extrabold text-lg lg:hover:border-b-2 hover:border-calltoaction"}>
          Resume
        </NavLink>
        <NavLink to="/techstack" className={({ isActive, isPending }) =>
          isPending ? "pending" :
            isActive ? "font-satisfy font-bold text-xl drop-shadow-[0_2px_3px_white]" :
              "text-calltoaction text-extrabold text-lg lg:hover:border-b-2 hover:border-calltoaction"}>
          Skills
        </NavLink>
      </div>
    </>
  )
}

export default Nav