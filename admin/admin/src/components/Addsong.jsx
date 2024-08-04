import React, { useState } from "react";
import { assets } from "../../../admin-assets/assets";
import axios from 'axios'
import { url } from "../App";
import { toast } from "react-toastify";
const Addsong = () => {

  const [image, setImage] = useState(false);
  const[song,setSong]= useState(false);
  const[name,setName] = useState("");
  const [desc,setDesc] =useState("");
  const [album,setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const[albumData,setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);
  
      const response = await axios.post(`${url}/api/songs/addsong`, formData);
      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      // Log detailed error information
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        toast.error(`Error: ${error.response.data.message || "An error occurred"}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Request data:", error.request);
        toast.error("No response received from server");
      } else {
        // Something else happened in setting up the request
        console.error("Error message:", error.message);
        toast.error("Error setting up request");
      }
    }
    setLoading(false);
  };
  

   
  return loading?
  (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">

      </div>

    </div>
  )
  :(
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex gap-8">
        <div className=" flex flex-col gap-4">
          <p>Upload Song</p>
          <input onChange={(e)=>setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              src={song?assets.upload_added:assets.upload_song}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              src={image?URL.createObjectURL(image):assets.upload_area}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
      </div>


      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
           <input  onChange={(e)=>setName(e.target.value)} value={name}type= "text" placeholder="Enter here" className="p-2  border w-[max(50vw,250px)] border-black  " required></input>


      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
           <input onChange={(e)=>setDesc(e.target.value)} value={desc} type= "text" placeholder="Enter here" className="p-2  border w-[max(50vw,250px)] border-black " required></input>


      </div>

      <div className=" flex flex-col gap-2.5  bg-transparent  ">
        <p>Album</p>
        <hr/>
        <select onChange={(e)=>setAlbum(e.target.value)} defaultValue={album}className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 ">
          <option >None</option>
        </select>
      </div>

      <button type="submit" className="bg-black text-white p-2 w-20">
        Add
      </button>
    </form>
  );
};

export default Addsong;
