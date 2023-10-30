import React, { useContext, useState } from 'react'
import resume from '../assets/resume-pic.png'
import { ThemeContext } from '../context/ThemeContext'

interface Props { }
const Resume: React.FC<Props> = () => {

  const { themeValue } = useContext(ThemeContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className={`flex flex-col min-w-full overflow-auto ${themeValue === 'dark' ? 'dark:text-slate-200' : ''} text-center pt-8`}>
      <span>
        My resume can be downloaded{" "}
        <a href={resume} download={"BaoKhanhTran_Resume"} rel="noopener noreferrer"
          className='links text-calltoaction drop-shadow-calltoaction'
        >here!
        </a>

        <img onClick={() => setOpenModal((prev: boolean) => !prev)}
          src={resume} 
          className='w-1/4 h-auto mx-auto cursor-pointer' 
        ></img>
      </span>

      {/* Full screen modal */}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-black flex items-center justify-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <img src={resume} alt="Full Screen Resume"  className="max-w-full max-h-full cursor-pointer" />
        </div>
      )}

      <span>
        <br/>
        <b>Watch my tech talk below</b> {" "}
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