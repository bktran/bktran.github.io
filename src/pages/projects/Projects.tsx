import React from 'react'
import { ProjectsData } from './projectsData'

interface Props { }

const Projects: React.FC<Props> = () => {

  return (
    <div className='flex flex-col flex-wrap items-center gap-y-8 md:flex-row md:gap-x-8 md:justify-around md:items-center h-section px-8'>
      {ProjectsData.map((proj, index) => {
        const projectName = proj.name
        const projectDescription = proj.description
        const projectImg = proj.img
        return (
          <div key={index} className='flex flex-col flex-wrap items-center gap-2'>
            <p>{projectName}</p>
            <img src={projectImg} alt={`${projectName} image`}
              className='h-auto w-5/6 md:w-[400px] ' 
            />
          </div>
        )
      })}
    </div>

    // <div>
    //   <p>Here are some projects that I've done</p>
    //   <div>
    //     Quizard App
    //   </div>
    //   <div>
    //     Apartments
    //   </div>
    // <div>
    //   <ProjectsData.pokemonTinder />
    // </div> 
    // </div>
  )
}

export default Projects