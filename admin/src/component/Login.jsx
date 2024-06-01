import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [admin, setadmin] = useState([])
    const adminlogin = async (e) =>{
        e.preventDefault()
        try{
           const response = await axios.post(``,{email,password})
           setadmin(response.data.message)
        }
        catch(error){
            console.log(error);
        }
    }

    console.log(admin);

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