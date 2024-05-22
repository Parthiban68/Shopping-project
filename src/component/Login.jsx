import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "./Auth";


//login Page functons
const Signin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errmessage, seterrmessage] = useState('')
    const [userlist, setuserlist] = useState([])

    const auth = useAuth()


    const handlelogin = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/user/signin`,{email, password})
            .then(res => { setuserlist(res.data.user)})
            .catch(err => { console.log(err) })
          console.log(userlist);

        if (userlist) {
            console.log("if");
            if (userlist.email === email) {
                auth.login(user.name)
                Navigate("/")
                console.log("hi");
            }
            else {
                seterrmessage("Incorrect Password")
            }
        }
        else {
            seterrmessage("User not found")
        }

    }

    return (

        <div className="p-2 m-9">
            <h1 className="text-[30px] flex justify-center align-center">Login</h1>
            <div className="flex flex-col mt-2">
                <label className="mt-3">Email</label>
                <input type="email" id="loin-input-email" placeholder="Enter Your Email" onChange={(e) => { setemail(e.target.value) }} />
                <label className="mt-3">Password</label>
                <input type="password" id="loin-input-password" placeholder="Enter Your Password" onChange={(e) => { setpassword(e.target.value) }} />
                <div className="flex justify-center align-center">
                    <button className="mt-3 bg-zinc-900 p-1 rounded-2xl text-white" onClick={handlelogin}>Login now</button>
                </div>

                {errmessage}
            </div>
        </div>
    );
}


// Sigup page functions
const SignUp = () => {
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




const Login = () => {

    const [active, setActive] = useState("false")

    return (
        <div style={{ height: "400px", width: "500px", border: "2px solid black", marginLeft: "390px" }} className="mt-[100px] rounded-2xl">
            <h1>{active ? (<Signin />) : (<SignUp />)}</h1>
            <div className=" justify-center align-center flex">
                {active ? (
                    <div>
                        <p>create your new account!
                            <button onClick={() => { setActive(!active) }}>
                                {active ? ("SignUp") : ("Login")}
                            </button>
                        </p>
                    </div>) : (
                    <div>
                        <p>Already have a account?
                            <button onClick={() => { setActive(!active) }}>
                                {active ? ("SignUp") : ("Login")}
                            </button>
                        </p>
                    </div>)}
            </div>
        </div>

    )
}

export default Login