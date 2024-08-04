import React from 'react';

const AddAlbum = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Album</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Album Name:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter album name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Artist:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter artist name"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Album
        </button>
      </form>
    </div>
  );
};

export default AddAlbum;
