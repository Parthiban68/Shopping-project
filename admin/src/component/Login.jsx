import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [admindata, setadmindata] = useState([])

    const auth = useAuth()
    const Navigate = useNavigate()


    const adminlogin = async (e) =>{
        e.preventDefault()
        try{
           const response = await axios.post(`http://localhost:3001/admin/adminsignin`,{email,password})
           setadmindata(response.data.admin)    
           if(admindata){
                auth.login({name:response.data.admin.adminname,email:response.data.admin.email})
                toast.success(response.data.message)
                Navigate("/additems")
           }
           else{
            Navigate('/login')
           }
          
        }
        catch(error){
            toast.error(error.response.data.message)

        }
    }

    console.log(admindata);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
  <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
    
    <form onSubmit={adminlogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300" 
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300" 
          required
        />
      </div>

      <button 
        type='submit' 
        className='w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-200'
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login