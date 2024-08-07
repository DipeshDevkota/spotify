import { useContext } from 'react';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

import './index.css'; // or the name of your CSS file
import { PlayerContext } from './context/PlayerContext';

export default function App() {
  const { audioRef, track, songsData, albumsData } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      {songsData.length !== 0 ? (
        <>
          <div className='h-[90%] flex'>
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : null}

      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
    </div>
  );
}
