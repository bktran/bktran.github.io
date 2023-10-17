import React from 'react'
import { FaReact } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { 
  SiTailwindcss, 
  SiRuby, SiJavascript, 
  SiTypescript, 
  SiRubyonrails, 
  SiJest,
  SiHtml5, 
  SiCss3,
} from 'react-icons/si'

const Skills = () => {
  return (
    <div className='relative text-5xl lg:text-6xl flex flex-wrap basis-4 py-4 gap-12 justify-around md:gap-y-20 md:gap-x-24 md:py-24 md:px-12'>
      <div className='icons' data-tooltip="HTML5">
        <SiHtml5 color='F06529' />
      </div>
      <div className='icons' data-tooltip="CSS3">
        <SiCss3 color='264de4'/>
      </div>
      <div className='icons' data-tooltip="JavaScript">
        <SiJavascript color='F0DB4F'/>
      </div>
      <div className='icons' data-tooltip="React">
        <FaReact color='61DBFB'/>
      </div>
      <div className='icons' data-tooltip="Jest">
        <SiJest color='C63D14'/>
      </div>
      <div className='icons' data-tooltip="TypeScript">
        <SiTypescript color='007acc' />
      </div>
      <div className='icons' data-tooltip="TailwindCSS">
        <SiTailwindcss color='06b6d4'/>
      </div>
      <div className='icons' data-tooltip="Ruby">
        <SiRuby color='A91401'/>
      </div>
      <div className='icons' data-tooltip="Rails">
        <SiRubyonrails color='CC0000'/>
      </div>
      <div className='icons' data-tooltip="PostgresQL">
        <BiLogoPostgresql color='336791'/>
      </div>
    </div>
  )
}

export default Skills