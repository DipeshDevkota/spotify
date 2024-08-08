import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import axios from 'axios';

const url = "http://localhost:4000";

const DisplayAlbum = () => {

  console.log("DisplayAlbum component rendered");
  const { id } = useParams();
  const { PlayWithId } = useContext(PlayerContext);

  const [albumData, setAlbumData] = useState(null);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        console.log("Fetching album data...");
        const albumResponse = await axios.get(`${url}/api/album/list`);
        console.log("Album Response:", albumResponse);
        setAlbumData(albumResponse.data);

        // If you need to fetch songs data
        // const songsResponse = await axios.get(`${url}/api/albums/${id}/songs`);
        // console.log("Songs Response:", songsResponse);
        // setAlbumSongs(songsResponse.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching album data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

  fetchAlbumData();},[]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!albumData) {
    return <div>Album not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-28 rounded' src={albumData.image} alt="Album" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1'>
            <img className='inline-block w-5' src="/path/to/spotify_logo.png" alt="Spotify Logo" /> {/* Use the actual path */}
            <b>Spotify</b>
            . 1,323,154 likes
            .<b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src="/path/to/clock_icon.png" alt="Clock Icon" /> {/* Use the actual path */}
      </div>
      <hr />
      {albumSongs.map((item, index) => (
        <div onClick={() => PlayWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>
              {index + 1}
            </b>
            <img className='inline w-10 mr-5' src={item.image} alt="Song" />
            {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>5 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
