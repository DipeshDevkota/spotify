import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar h-[10vh] w-80 flex flex-col items-start justify-between p-3 mb-4 bg-white">
      <div className="sidebar-1 mb-4 bg-black p-2 w-full">
        <h1 className="text-white mb-1">Home</h1>
        <h1 className="text-white">Search</h1>
      </div>
      <div className="sidebar-2 mb-4 w-full bg-slate-500">
        <h1 className="text-black p-3">Your Library</h1>
      </div>

      <div className="create mb-4 w-full bg-slate-700">
  <h1 className="text-white mb-1  ml-3 p-2 text-2xl flex items-center whitespace-nowrap">
    Create your first playlist
  </h1>
  <h2 className="text-white mb-2 text-sm p-2 ml-8">It's easy; we will help you</h2>
  <button className="btn bg-slate-50 text-black p-2 rounded ml-16 mb-3">Create Playlist</button>
</div>

      
      <div className="create w-full bg-slate-700 p-2">
        <h5 className="text-white mb-1 text-xl p-1  mt-2">Let’s find some podcasts to follow</h5>
        <h2 className="text-white mb-2 text-sm">We’ll keep you updated on new episodes</h2>
        <button className="btn bg-slate-50 text-black p-2 rounded ml-12">Browse Podcasts</button>
      </div>
    </div>
  );
};

export default Sidebar;
