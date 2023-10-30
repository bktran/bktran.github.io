import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Nav = () => {
  const {themeValue} = useContext(ThemeContext)

  return (
    <>
      <div className='grid grid-flow-col sm:justify-end justify-around sm:gap-12 p-4 sm:mt-4 drop-shadow-[0px_2px_3px_black] relative'>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? `font-satisfy italic text-3xl drop-shadow-white sm:absolute sm:top-4 sm:left-4 ${themeValue === 'dark' ? 'dark:text-slate-50' : ''}` :
              "text-calltoaction text-extrabold text-lg links"}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) =>
             isActive ? `font-satisfy italic text-3xl drop-shadow-white sm:absolute sm:top-4 sm:left-4 ${themeValue === 'dark' ? 'dark:text-slate-50' : ''}` :
             "text-calltoaction text-extrabold text-lg links"}>
          Projects
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) =>
             isActive ? `font-satisfy italic text-3xl drop-shadow-white sm:absolute sm:top-4 sm:left-4 ${themeValue === 'dark' ? 'dark:text-slate-50' : ''}` :
              "text-calltoaction text-extrabold text-lg links"}>
          Resume
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) =>
             isActive ? `font-satisfy italic text-3xl drop-shadow-white sm:absolute sm:top-4 sm:left-4 ${themeValue === 'dark' ? 'dark:text-slate-50' : ''}` :
              "text-calltoaction text-extrabold text-lg links"}>
          Skills
        </NavLink>
      </div>
    </>
  )
}

export default Nav