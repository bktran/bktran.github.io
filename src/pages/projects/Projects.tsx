import React, { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ThemeContext } from '../../context/ThemeContext'
import { IProjectsData, ProjectsData } from './projectsData'

interface Props { }

const Projects: React.FC<Props> = () => {
  const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null)
  React.useEffect(() => {
    setOpenModalIndex(null)
  }, [])

  const { themeValue } = useContext(ThemeContext)

  return (
    <div className='flex flex-col sm:flex-wrap items-center gap-y-8 md:flex-row md:gap-x-8 md:justify-around md:items-center h-section px-8'>
      {ProjectsData.map((proj: IProjectsData, index: number) => {
        const projectName = proj.name
        const projectDescription = proj.description
        const projectImg = proj.img
        const demoLink = proj.ytLink
        return (
          <>
            <div key={index} onClick={(e) => { setOpenModalIndex(index === openModalIndex ? null : index) }}
              className='flex flex-col flex-wrap items-center gap-2'>
              <p className={`flex flex-col pb-2 shadow-sm text-2xl ${themeValue === "dark" ? "dark:text-slate-100" : ""}`}>
                {projectName}
              </p>
              <img src={projectImg} alt={`${projectName}`}
                className='h-auto w-5/6 md:w-[400px] md:hover:drop-shadow-none hover:cursor-pointer drop-shadow-calltoaction'
              />
            </div>
            {/*DETAILS --- MODAL for DESKTOP*/}
            <div 
              className={`${index === openModalIndex ? "" : "hidden"}
              md:fixed md:min-w-full md:min-h-full md:top-0 md:left-0 backdrop-blur-2xl z-40 rounded-2xl
            `}>

              <div 
               className={`md:fixed md:top-1/4 md:bottom-1/4 md:left-1/4 md:right-1/4 text-center gap-8 flex flex-col justify-center items-center rounded-3xl bg-secondary min-w-fit min-h-fit p-16
                ${themeValue === 'dark' ? 'dark:bg-slate-800' : ''}
              `}
              >
                <div onClick={() => setOpenModalIndex(index === openModalIndex ? null : index)} >
                  <AiOutlineCloseCircle size={'2.5rem'}
                    className={`absolute top-8 right-8 hover:cursor-pointer rounded-full hover:text-slate-200 hidden md:block
                 ${themeValue === 'dark' ? 'text-slate-200 hover:text-slate-600' : ''}
                `} />
                </div>

                <img src={projectImg} alt={`${projectName}`}
                  className={`h-auto w-5/6 md:w-[400px] md:block
                  ${index === openModalIndex ? "hidden" : ""}
                `}
                />
                <div className={` ${themeValue === 'dark' ? 'dark:text-slate-200' : ''}`}>
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