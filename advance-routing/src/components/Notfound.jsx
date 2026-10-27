import React from 'react'

const Notfound = () => {
  
 return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold text-red-600">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}

export default Notfound