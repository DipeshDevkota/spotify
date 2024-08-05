import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Listsong = () => {
  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/songs/list`);
      if (response.data.success) {
        setData(response.data.songs);
        console.log('Data is', response.data);
        console.log('Songs added', response.data.songs);
      }
    } catch (error) {
      console.log('Error fetching songs:', error);
    }
  };

const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/songs/delete`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
      } else {
        toast.error(response.data.message || 'Failed to delete the song');
        console.log('Delete response:', response.data);
      }
    } catch (error) {
      toast.error('Error occurred while deleting the song');
      console.error('Delete error:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <ToastContainer />
      <p>All Songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_0.5fr_0.5fr] items-center gap-2 p-2 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((song, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'
          >
            <img className='w-12' src={song.image} alt={song.name} />
            <p>{song.name}</p>
            <p>{song.album}</p>
            <p>{song.duration}</p>
            <p className='cursor-pointer text-red-500' onClick={() => removeSong(song.id)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsong;
