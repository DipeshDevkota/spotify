import React from 'react';

const ListAlbum = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">List Albums</h1>
      <ul className="space-y-2">
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Album 1
        </li>
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Album 2
        </li>
        <li className="p-2 bg-white border border-gray-300 rounded-md">
          Album 3
        </li>
      </ul>
    </div>
  );
};

export default ListAlbum;
