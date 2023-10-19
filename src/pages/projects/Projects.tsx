import React from 'react'
import { ProjectsData, IProjectsData } from './projectsData'

interface Props { }

const Projects: React.FC<Props> = () => {
  const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null)
  React.useEffect(() => {
    setOpenModalIndex(null)
  }, [])

  return (
    <div className='flex flex-col flex-wrap items-center gap-y-8 md:flex-row md:gap-x-8 md:justify-around md:items-center h-section px-8'>
      {ProjectsData.map((proj: IProjectsData, index: number) => {
        const projectName = proj.name
        const projectDescription = proj.description
        const projectImg = proj.img
        const demoLink = proj.ytLink
        return (
          <>
            <div key={index} onClick={(e) => {setOpenModalIndex(index === openModalIndex ? null : index)}}
              className='flex flex-col flex-wrap items-center gap-2'>
              <p>{projectName}</p>
              <img src={projectImg} alt={`${projectName} image`}
                className='h-auto w-5/6 md:w-[400px] md:hover:drop-shadow-none hover:cursor-pointer drop-shadow-calltoaction'
              />
            </div>
            {/*DETAILS --- MODAL for DESKTOP*/}
            <div onClick={() => setOpenModalIndex(index === openModalIndex ? null : index)} className={`${index == openModalIndex ? "" : "hidden"}
              md:absolute md:left-1/2 md:transform md:-translate-x-1/2 :md-translate-y-1/2 md:h-1/2 md:w-1/2 backdrop-blur-md z-50 rounded-2xl border-4
              `}>
              <div className="md:absolute md:top-[20%] md:left-1/2 md:transform md:-translate-x-1/2 :md-translate-y-1/2 text-center gap-4 flex flex-col justify-center items-center"
              >
                <img src={projectImg} alt={`${projectName} image`}
                  className={`h-auto w-5/6 md:w-[400px] md:block
                  ${index == openModalIndex ? "hidden" : ""}
                `}
                />
                <div className='shadow-custom'>
                  {projectDescription}
                </div>
                <a href={demoLink} target='_blank' rel="noopener noreferrer"
                  className='text-calltoaction drop-shadow-calltoaction links'
                >
                  {`${demoLink ? "Watch My Project Demo" : ""}`}
                </a>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Projects