import { useContext } from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import profile from "../assets/Profile.png";
import { ThemeContext } from "../context/ThemeContext";

interface Props {

 }
const SideBar: React.FC<Props> = () => {
  const {themeValue, setThemeValue} = useContext(ThemeContext)

  return (
    <div className={`h-full border-secondary-sage rounded-2xl flex flex-col items-center md:justify-around md:py-36 lg:py-44`}>
      <img src={profile} alt="avatar" className="rounded-full h-auto w-40 my-4 drop-shadow-2xl md:w-48 xl:w-56" />
      <h3 className="text-3xl font-satisfy text-primary drop-shadow-[0px_2px_3px_black]">
        <span className="text-calltoaction">Bao Khanh </span>
        Tran
      </h3>
      <p className={`text-xl w-full rounded-xl bg my-1 bg-secondary-sage shadow-md ${themeValue === "dark" ? "dark:text-slate-100" : ""}`}>
        Full Stack Developer
      </p>
      <p className={`text-xl w-full rounded-xl bg my-1 bg-secondary-sage shadow-md ${themeValue === "dark" ? "dark:text-slate-100" : ""}`}>
          Navy Veteran
      </p>
    
      <div className="flex gap-4 text-3xl py-2">
        <a href="https://www.linkedin.com/in/baokhanhtran/" target="_blank" rel="noopener noreferrer" 
          className="hover:text-linkedin p-1 links hover:opacity-60 text-linkedin" >
          <GrLinkedin />
        </a>
        <a href="https://github.com/bktran" target="_blank" rel="noopener noreferrer" 
          className="hover:text-github p-1 links hover:opacity-60">
          <GrGithub />
          </a>
      </div>
      <div className={`md:h-fit w-calc flex flex-col bg-secondary-sage py-4 shadow-sm ${themeValue === "dark" ? "dark:text-slate-100" : ""}`}>
        <span className="flex gap-1 justify-center items-center">
          <CiLocationOn/>
          <p>San Diego, CA</p>
        </span>
        <span className="flex gap-1 justify-center items-center" >
          <button onClick={() => window.open("mailto: kbtran.22@gmail.com")}>
            <AiOutlineMail />
          </button>
          <p>kbtran.22@gmail.com</p>
        </span>
      </div>
      <div className="flex flex-col py-4 gap-3 lg:flex-row items-center md:gap-x-4 ">
        <button className="bg-calltoaction rounded-full w-fit px-4 drop-shadow-[0px_2px_3px_black] hover:drop-shadow-[0px_2px_2px_gray] active:bg-secondary" onClick={() => window.open("mailto: kbtran.22@gmail.com")}
        > 
          Email Me 
        </button>
        <button type='button' onClick={() => setThemeValue((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')}
          className="bg-calltoaction rounded-full w-fit px-4 drop-shadow-[0px_2px_3px_black] hover:drop-shadow-[0px_2px_2px_gray] active:bg-secondary"
        > 
          {themeValue === 'dark' ? 
            <div className="flex items-center">
              <MdOutlineDarkMode />
              Light Mode
            </div>
            : 
            <div className="flex items-center">
              <MdDarkMode/>
              Dark Mode
            </div> } 
        </button>
      </div>
    </div>
  );
};

export default SideBar;
