import React from 'react'
import lakePic from "../assets/me-hike.jpg"

const About = () => {
  return (
    <div className="flex flex-col gap-8 p-4 text-center h-section place-items-center w-fit">
      <img src={lakePic} alt="posing at a lake" 
        className='md:rounded-lg shadow-custom sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto'
      />
      <p>👋 Hi, I'm Bao! After serving 6 years in the US Navy as a Nuclear Operator, I pursued Computer Science degree and transitioned into Full Stack Development. I have been developing my skills in a variety of tech stacks to develop different apps. With a foundation in the Navy's training and discipline, combined with my tech skills, I am always looking forward to creating efficient and impactful web applications. You can checkout my tech stack in the Skills tab to the right! </p>
    </div>
  )
}

export default About