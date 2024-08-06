import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Listalbum = () => {
  const [album, setAlbum] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setAlbum(response.data.album);
        console.log('Data is', response.data);
        console.log('Songs added', response.data.album);
      }
    } catch (error) {
      console.log('Error fetching songs:', error);
    }
  };



  const removeAlbum = async (id) => {
    try {
      console.log('Removing album with ID:', id);
      const response = await axios.delete(`${url}/api/album/remove/${id}`);
      if (response.data.success) {
        toast.success('Album removed successfully');
        await fetchAlbum();
      } else {
        toast.error('Failed to delete the album');
        console.log('Delete response:', response.data);
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Error occurred while deleting the album');
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div>
      <ToastContainer />
      <p>All Album List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_0.5fr_0.5fr] items-center gap-2 p-2 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>BgColour</b>
          <b>Action</b>

        </div>
        {album.map((album, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'
          >
            <img className='w-12' src={album.image} />
            <p>{album.name}</p>
            <p>{album.desc}</p>
            <p>{album.bgColour}</p>

            <p className='cursor-pointer text-red-500' onClick={() => removeAlbum(album._id)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listalbum;
