import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Addsong from "./components/Addsong";
import Addalbum from "./components/Addalbum";
import Listsong from "./components/Listsong";
import Listalbum from "./components/Listalbum";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const url = 'http://localhost:4000';

const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<Addsong />} />
            <Route path="/add-album" element={<Addalbum />} />
            <Route path="/list-song" element={<Listsong />} />
            <Route path="/list-album" element={<Listalbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
