import avatar from "../assets/me-3.png";
import { GrLinkedin, GrGithub, GrLocation } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'



const SideBar = () => {
  return (
    <div className=" border-secondary-sage rounded-2xl flex flex-col items-center">
      <img src={avatar} alt="avatar" className="rounded-full h-auto w-40 my-4 drop-shadow-2xl" />
      <h3 className="text-3xl font-satisfy text-primary">
        <span className="text-calltoaction">Bao Khanh </span>
        Tran
      </h3>
      <p className="font-mono text-primary w-11/12 rounded-xl bg my-1 bg-secondary-sage">
        Full Stack Developer
      </p>
      <div className="bg-secondary-sage w-11/12 my-1 rounded-xl ">
        <p className="font-sans font-bold bg-gradient-to-t from-red-500 via-neutral-200 to-blue-900 text-transparent inline-block bg-clip-text">
          Navy Veteran
        </p>
      </div>
      <div className="flex gap-4 text-3xl py-2">
        <a href="https://www.linkedin.com/in/baokhanhtran/" target="_blank" className="hover:text-linkedin p-1 lg:hover:border-b-2 lg:border-calltoaction opacity-60 hover:opacity-100 text-linkedin" ><GrLinkedin /></a>
        <a href="https://github.com/bktran" target="_blank" className="hover:text-github p-1 hover:border-b-2 border-calltoaction opacity-60 hover:opacity-100"><GrGithub /></a>
      </div>
      <div className="w-calc h-2/5 flex flex-col font-serif bg-secondary-sage py-4 ">
        <span className="flex gap-1 justify-center items-center">
          <GrLocation />
          <p>San Diego, CA</p>
        </span>
        <span className="flex gap-1 justify-center items-center">
          <AiOutlineMail />
          <p>kbtran.22@gmail.com</p>
        </span>
      </div>
      <div className="flex flex-col py-4 gap-3">
        <button className="bg-calltoaction rounded-full w-40" onClick={() => window.open("mailto: kbtran.22@gmail.com")}> Email Me </button>
        <button className="bg-calltoaction rounded-full w-40"> Dark Mode </button>
      </div>
    </div>
  );
};

export default SideBar;
