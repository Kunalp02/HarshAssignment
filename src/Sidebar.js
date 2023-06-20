import React from 'react';

function Sidebar() {
  return (
    <div className="h-[100%] w-[20%] bg-gray-100">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-wrap p-4 gap-2">
        <button className="w-30 px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Draw Shape
        </button>
        <button className="w-30 px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-green-600">
          Save Shape
        </button>
        <button className="w-30 px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-red-600">
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
