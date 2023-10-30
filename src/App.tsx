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
        <div className={`grid grid-cols-12 gap-6 px-5 lg:px-36 py-8 min-h-screen
          ${themeValue === 'dark' ? 'dark:bg-slate-800' : ''}
        `}>
          <div className={`"h-full shadow-custom col-span-12 text-center  rounded-2xl md:col-span-4 p-4 relative
            ${themeValue === 'dark' ? 'dark:bg-slate-700' : ''}
          `}>
            <SideBar />
          </div>
          <div className={`h-auto md:overflow-y-auto shadow-custom col-span-12 rounded-2xl md:col-span-8 hide-scrollbar pb-6
            ${themeValue === 'dark' ? 'dark:bg-slate-700' : ''}
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
