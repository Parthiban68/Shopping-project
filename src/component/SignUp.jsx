import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "./Auth";

function SignUp() {
  const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [list, setlist] = useState([])

    const changename = (e) => {
        setusername(e.target.value)
    }

    const changeemail = (e) => {
        setemail(e.target.value)
    }

    const changepassword = (e) => {
        setpassword(e.target.value)
    }


    const handleaignin = () => {
        axios.post(`http://localhost:3001/user/signup`, { username, email, password })
            .then(response => {console.log(response.data.message)})
           .catch(err => { console.log(err) })
        Navigate("/login")
    }


    return (
        <div className="p-2 m-9">
            <h1 className="text-[30px] flex justify-center align-center">Sign In</h1>
            <div className="flex flex-col mt-2">
                <label className="mt-3">UserName</label>
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    onChange={changename} value={username}
                />
                <label className="mt-3">Email</label>
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    onChange={changeemail} value={email}
                />
                <label className="mt-3">Password</label>
                <input
                    type="text"
                    placeholder="Enter Your password"
                    onChange={changepassword} value={password}
                />
                <div className="flex justify-center align-center mt-2">
                    <button className="mt-3 bg-zinc-900 p-1 rounded-2xl text-white" onClick={handleaignin}>Signin now</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp