import React from 'react'

function AddAdmin() {
  return (
    <div>
          <main className="w-full h-screen flex flex-col items-center bg-gray-50 sm:px-4">
              <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                  <div className="text-center">
                      <div className="mt-7 space-y-2">
                          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Add Admin</h3>
                      </div>
                  </div>
                  <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                      <form  className="space-y-5">
                          <div>
                              <label className="font-medium">
                                  Name
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Email
                              </label>
                              <input
                                  type="email"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Password
                              </label>
                              <input
                                  type="password"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <button
                              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                          >
                              Add
                          </button>
                      </form>
                  </div>
              </div>
          </main>
      
  </div>
  )
}

export default AddAdmin