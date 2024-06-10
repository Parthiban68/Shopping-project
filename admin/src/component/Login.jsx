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
    <div>
        <form onSubmit={adminlogin}>
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=>(setEmail(e.target.value))} />
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>(setPassword(e.target.value))}/>
            <input type='submit' value="Login"/>
        </form>
    </div>
  )
}

export default Login