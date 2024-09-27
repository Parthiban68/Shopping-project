import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from './Auth'
// import toast from 'react-hot-toast'

function AddAdmin() {
    const [adminname, setAdminname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const formdata = {
        adminname,
        email,
        password
    }
    const Auth = useAuth()
    const addadmin = (e) =>{
        e.preventDefault()
        try{
            if(Auth.user.email === "parthiba1268@gmail.com"){
                const response = axios.post(`http://localhost:3001/admin/adminsignup`,{adminname,email,password})
                console.log(response.data);
                // toast.success(response.data.message)
            }else{
                // toast.error("Access denied");
                console.log("Access denied");
                
            }
         
        }catch(error){
            console.log(error);
        }
    }

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
                        <form className="space-y-5" onSubmit={addadmin}>
                            <div>
                                <label className="font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    value={adminname}
                                    onChange={(e) => { setAdminname(e.target.value) }}
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
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
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
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <input
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                type='submit'
                                value="Add"
                            />
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default AddAdmin