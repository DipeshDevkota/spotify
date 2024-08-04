import React from 'react';

const ListSong = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">List Songs</h1>
      <ul className="space-y-2">
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Song 1
        </li>
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Song 2
        </li>
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Song 3
        </li>
      </ul>
    </div>
  );
};

export default ListSong;
