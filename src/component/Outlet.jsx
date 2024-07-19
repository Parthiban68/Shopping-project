import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Outlet() {
  const [out, setOut] = useState([])
  useEffect (()=>{
    outlet()
  }, [])

  const outlet = async () =>{
    try {
      const response = await axios.get('http://localhost:3001/product/outlet')
      setOut(response.data.listofoulet)
    } catch (error) {
      console.error("Data not Feched", error);
    }
  }
  return (
    <>
    {out.map((list)=>(
      <h1>{list.image}</h1>
    ))}
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 cursor-pointer">
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    {/* </p>
                    <p className="text-lg text-white"> */}
                      Madukkaria main road
                    {/* </p>
                    <p className="text-lg text-white"> */}
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    </p>
                    <p className="text-lg text-white">
                      Madukkaria main road
                    </p>
                    <p className="text-lg text-white">
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    </p>
                    <p className="text-lg text-white">
                      Madukkaria main road
                    </p>
                    <p className="text-lg text-white">
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    </p>
                    <p className="text-lg text-white">
                      Madukkaria main road
                    </p>
                    <p className="text-lg text-white">
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    </p>
                    <p className="text-lg text-white">
                      Madukkaria main road
                    </p>
                    <p className="text-lg text-white">
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative block bg-black mb-10 w-[300px] h-[400px] ml-10 rounded-2xl">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                className="absolute inset-0 h-[400px] w-full object-cover opacity-100 transition-opacity group-hover:opacity-50 rounded-2xl"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Location</p>

                <p className="text-xl font-bold text-white sm:text-2xl">SwizerLand</p>

                <div className="mt-32 sm:mt-48 lg:mt-32">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p className="text-lg text-white">
                      D,11 Railway Gate Jms Opposite
                    </p>
                    <p className="text-lg text-white">
                      Madukkaria main road
                    </p>
                    <p className="text-lg text-white">
                      coimbaotre-641021
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Outlet