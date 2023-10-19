import React from 'react'
import resume from '../assets/BaoKhanhTran-resume-v3.pdf'

interface Props { }
const Resume: React.FC<Props> = () => {
  return (
    <div>
      My resume can be downloaded{" "}
      <a href={resume} download={"BaoKhanhTran_Resume"}
        className='links text-calltoaction drop-shadow-[0px_2px_3px_black]'
      >here</a>
      !
    </div>
  )
}

export default Resume