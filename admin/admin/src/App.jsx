import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Addsong from "./components/Addsong";
import { Routes, Route } from "react-router-dom";
import Addalbum from "./components/Addalbum";
import Listsong from "./components/Listsong";
import Listalbum from "./components/Listalbum";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className=" flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar/>
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]"></div>
      <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
        <Routes>
          <Route path="/add-song" element={<Addsong />}/>
          <Route path='/add-album' element ={<Addalbum/>}/>
          <Route path='/list-song' element={<Listsong/>}/>
          <Route path='/list-album' elemnent={<Listalbum/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default App;
