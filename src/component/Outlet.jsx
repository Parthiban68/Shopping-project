import React from 'react'

function Outlet() {
  return (
    <div className="group relative block bg-black mb-10 w-[300px] ml-10 rounded-2xl">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-50 rounded-2xl"
    />
  
    <div className="relative p-4 sm:p-6 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>
  
      <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>
  
      <div className="mt-32 sm:mt-48 lg:mt-10">
        <div
          className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <i class="fa-solid fa-location-dot text-white"></i>
          <p className="text-lg text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Outlet