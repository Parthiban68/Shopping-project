import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

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
                Navigate("/additems")
           }
           else{
            Navigate('/login')
           }
           console.log(response.data.message);
        }
        catch(error){
            console.log(error);

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