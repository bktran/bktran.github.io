import React, { useContext } from 'react'
import resume from '../assets/BaoKhanhTran-resume-v3.pdf'
import { ThemeContext } from '../context/ThemeContext'

interface Props { }
const Resume: React.FC<Props> = () => {

  const { themeValue } = useContext(ThemeContext)

  return (
    <div className={`flex flex-col min-w-full ${themeValue === 'dark' ? 'dark:text-slate-200' : ''} text-center pt-8 min-h-full`}>
      <span>
        My resume can be downloaded{" "}
        <a href={resume} download={"BaoKhanhTran_Resume"} rel="noopener noreferrer"
          className='links text-calltoaction drop-shadow-calltoaction'
        >here!
        </a>
      </span>

      <span>
        Watch my tech talk below {" "}
        <iframe
          className='w-11/12 h-[500px] mx-auto'
          src="https://www.youtube.com/embed/OTTBrbQVFJ0"
          title="Tech Talk: Bao - GreenSock Animation Platform (GSAP)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </span>
    </div>
  )
}

export default Resume