import { useContext, useEffect } from "react"
import avatar from "../assets/avatar.jpeg"
import { ThemeContext } from "../context/ThemeContext"
import { NavLink } from "react-router-dom"

const About = () => {
  const {themeValue} = useContext(ThemeContext)

  return (
    <div className="flex flex-col gap-8 p-4 text-center h-section place-items-center w-fit">
      <img src={avatar} alt="Bao on balcony with ocean in the background" 
        className='shadow-custom sm:mt-12 sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto rounded-t-full'
      />
      <p className={`${themeValue === "dark" ? "dark:text-slate-100" : ""}`}>👋 Hi, I'm Bao! After serving 6 years in the US Navy as a Nuclear Operator, I pursued Computer Science degree and transitioned into Full Stack Development. I have been developing my skills in a variety of tech stacks to develop different apps. With a foundation in the Navy's training and discipline, combined with my tech skills, I am always looking forward to creating efficient and impactful web applications. You can checkout my tech stack in {" "}
        <span className="links text-calltoaction drop-shadow-[0px_2px_3px_black] text-bold ">
          <NavLink to={'/skills'}>
            Skills
          </NavLink>
        </span> 
      {" "}tab!
      </p>
    </div>
  )
}

export default About