import "./index.css";
import SideBar from "./pages/SideBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-36 mt-12">
        <div className="col-span-12 text-center bg-gradient-to-b from-primary via-secondary-sage to-secondary rounded-2xl lg:col-span-3 p-4 relative">
          <SideBar />
        </div>
        <div className="col-span-12 bg-secondary rounded-2xl lg:col-span-9 bg-gradient-to-b from-primary via-secondary-sage to-secondary">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
