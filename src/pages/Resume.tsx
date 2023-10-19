import React from 'react'
import resume from '../assets/BaoKhanhTran-resume-v3.pdf'

interface Props { }
const Resume: React.FC<Props> = () => {
  return (
    <div className='flex flex-col w-fit'>
      <span>
        My resume can be downloaded{" "}
        <a href={resume} download={"BaoKhanhTran_Resume"} rel="noopener noreferrer"
          className='links text-calltoaction drop-shadow-calltoaction'
        >here!
        </a>
        
      </span>
      <span>
        Watch my tech talk {" "}
        <a href={"https://youtu.be/OTTBrbQVFJ0"} target="_blank" rel="noopener noreferrer"
          className='links text-calltoaction drop-shadow-calltoaction'
        >
        here!
        </a>
      </span>
    </div>
  )
}

export default Resume