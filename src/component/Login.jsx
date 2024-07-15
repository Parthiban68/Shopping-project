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

    const {login} = useAuth()
    const navigate = useNavigate();


    const handlelogin = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/user/signin`, { email, password })
            .then((res) => {
                console.log(res);
                if (res.status === 200 && res.data.message == "Login successful") {
                    login(res.data.token, res.data.user)
                }
                else{
                    navigate("/signup")
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

        <section className="relative flex flex-wrap lg:h-screen mb-32">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form onSubmit={handlelogin} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                required
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                onChange={(e) => { setemail(e.target.value) }}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <i class="fa-solid fa-at"></i>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                required
                                placeholder="Enter password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                onChange={(e) => { setpassword(e.target.value) }}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <i class="fa-regular fa-eye"></i>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <NavLink to={"/signup"} className="underline">Sign up</NavLink>
                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 ">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1586216912700-d739f523098f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNob2UlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>
        </section>

    );
}

export default Login