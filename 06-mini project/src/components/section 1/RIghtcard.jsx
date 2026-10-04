import React from 'react'

const Rightcard = ({ userk }) => {
  return (
    <div className="bg-red-300 relative h-full w-70 overflow-hidden rounded-4xl shrink-0">

      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={userk.image}
          alt=""
        />
      </div>

      <div className="absolute top-0 left-0 h-full w-full p-6">

        <h2 className="bg-white rounded-full p-2 h-14 w-14 flex items-center justify-center font-bold">
          {userk.id}
        </h2>

        <div className="flex flex-col justify-between h-[calc(100%-56px)]">

          <p className="mt-18">
            {userk.description}
          </p>

          <div className="flex justify-between">

            <button className="bg-blue-400 rounded-4xl p-1 font-medium">
              {userk.status}
            </button>

            <button className="bg-blue-400 rounded-4xl p-1 font-medium">
              {userk.button}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Rightcard