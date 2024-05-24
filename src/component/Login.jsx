import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from "./Auth";


//login Page functons
const Signin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errmessage, seterrmessage] = useState('')
    const [userlist, setuserlist] = useState([])

    const auth = useAuth()
    const navigate = useNavigate();


    const handlelogin = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/user/signin`,{email, password})
        .then((res) => {
            console.log(res);
            if (res.status === 200 && res.data.message == "Login successful") {
              auth.login({ name: res.data.user.name, email: res.data.user.email });
              if (res.data.user.email === "parthiban1268@gmail.com") {
                navigate("/mens");
              } else {
                navigate("/men");
              }
            }
          })
          .catch((err) => {
            console.log(err.response);
            if (err.response) {
              seterrmessage(err.response.data.message);
            } else {
              seterrmessage("An error occurred. Please try again.");
            }
          });

    }

    return (

        <div className="p-2 m-9">
            <h1 className="text-[30px] flex justify-center align-center">User Login</h1>
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
            <div className='px-5 mt-5'>
                <p>create your new account!
                            <button >
                            <NavLink to={"/signup"}>SignUp</NavLink>
                            </button>
                            </p>
            </div>
        </div>
    );
}

const AdminLogin = () => {
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
            <h1 className="text-[30px] flex justify-center align-center">Admin Login</h1>
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




const Login = () => {

    const [active, setActive] = useState("false")

    return (  
        <div style={{ height: "450px", width: "500px", border: "2px solid black", marginLeft: "390px" }} className="mt-[70px] rounded-2xl">
        <div className="mt-4 px-9">
                {active ? (
                    <div>
                            <button onClick={() => { setActive(!active) }} className='bg-black rounded-2xl p-2 text-white'>
                                {active ? ("Admin Login") : ("User Login")}
                            </button>
                    </div>) : (
                    <div>
                            <button onClick={() => { setActive(!active) }} className='bg-black rounded-2xl p-2 text-white'>
                            {active ? ("Admin Login") : ("User Login")}
                            </button>
                    </div>)}
                    
            </div>
            <h1>{active ? (<Signin />) : (<AdminLogin/>)}</h1>
            
        </div>

    )
}

export default Login