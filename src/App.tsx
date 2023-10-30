import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import "./index.css";
import Pages from "./pages/Pages";
import SideBar from "./pages/SideBar";

interface Props { }

const App: React.FC<Props> = () => {

  const {themeValue} = useContext(ThemeContext)

  return (
      <>
        <div className={`grid grid-cols-12 gap-6 px-5 lg:px-36 min-h-screen py-8 overflow-hidden 
          ${themeValue === 'dark' ? 'dark:bg-slate-900' : ''}
        `}>
          <div className={`"h-full shadow-custom col-span-12 text-center rounded-2xl md:col-span-4 p-4
             ${themeValue === 'dark' ? 'dark:bg-slate-800' : ''}
          `}>
            <SideBar />
          </div>
          <div className={`h-full md:overflow-y-auto shadow-custom col-span-12 rounded-2xl md:col-span-8 hide-scrollbar pb-6 overflow-auto 
            ${themeValue === 'dark' ? 'dark:bg-slate-800' : ''}
          `}>
            <BrowserRouter>
              <Pages />
            </BrowserRouter>
          </div>
        </div>
      </>
  );
};

export default App;
