import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar fixed top-3 left-80 right-0 flex justify-between p-3 bg-yellow-500 z-50">
      <div className="arrow p-2 text-white">Arrow</div>
      <div className="top-2 flex gap-3 items-center">
        <div className="premium text-white cursor-pointer bg-black p-2 rounded">Explore Premium</div>
        <div className="installapp text-white bg-black cursor-pointer p-2 rounded">Install App</div>
        <div className="account border-2 border-black rounded-full cursor-pointer p-2">ACC</div>
      </div>
    </div>
  );
}

export default Topbar;
