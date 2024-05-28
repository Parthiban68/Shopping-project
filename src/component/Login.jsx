import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from "./Auth";


const Login = () => {

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
                navigate("/mens");
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

            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <NavLink to={"/signup"} className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</NavLink></p>
                    </div>
                </div>
                <form onSubmit={handlelogin}  className="mt-8 space-y-5" >
                    <div>
                        <label className="font-medium">Email </label>
                    <input
                            type="email"
                            required
                            onChange={(e) => { setemail(e.target.value) }}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                             focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            onChange={(e) => { setpassword(e.target.value) }}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none
                             border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600
                         hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <NavLink className="hover:text-indigo-600">Forgot password?</NavLink>
                    </div>
                </form>
            </div>
        </main>
       
    );
}

export default Login