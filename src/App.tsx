import "./index.css";
import "./App.css"
import SideBar from "./pages/SideBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import React from "react";

interface Props {}

const App: React.FC<Props> = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false)
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <>
      <div className={`h-screen grid grid-cols-12 gap-6 px-5 lg:px-36 py-8 
      ${isDarkMode? "dark:bg-slate-800" : "" }`}>
        <div className="h-full shadow-custom col-span-12 text-center bg-gradient-to-b from-primary via-secondary-sage to-secondary rounded-2xl md:col-span-4 p-4 relative">
          <SideBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        </div>
        <div className="h-full md:overflow-y-auto shadow-custom col-span-12 bg-secondary rounded-2xl md:col-span-8 bg-gradient-to-b from-primary via-secondary-sage to-secondary hide-scrollbar">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
