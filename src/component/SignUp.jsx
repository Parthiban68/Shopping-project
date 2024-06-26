import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useAuth } from "./Auth";
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [list, setlist] = useState([])

    const Navigate = useNavigate();

    const changename = (e) => {
        setusername(e.target.value)
    }

    const changeemail = (e) => {
        setemail(e.target.value)
    }

    const changepassword = (e) => {
        setpassword(e.target.value)
    }


    const handleaignin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/user/signup`, { username, email, password })
            .then(response => { console.log(response.data.message) })
            .catch(err => { console.log(err) })
        Navigate("/login")
    }


    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:h-auto lg:grid-cols-12 h-16">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-[500px] xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to FreaksWorld
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 lg:h-[500px]"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <form onSubmit={handleaignin} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label for="FirstName" className="block text-sm font-medium text-gray-700">
                                    User Name
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="Enter Your Username"
                                    onChange={changename} value={username}
                             className="mt-1 w-full rounded-md px-3 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label for="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    required
                                    placeholder="Enter Your Email"
                                    onChange={changeemail} value={email}
                                    className="mt-1 w-full px-3 py-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label for="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    required
                                    placeholder="Enter Your password"
                                    onChange={changepassword} value={password}
                                    className="mt-1 w-full px-3 py-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label for="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        required
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <NavLink  className="text-gray-700 underline"> terms and conditions </NavLink >
                                    and
                                    <NavLink  className="text-gray-700 underline">privacy policy</NavLink>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <input
                                    type='submit'
                                    value="Create an account"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                />

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <NavLink to={"/login"} className="text-gray-700 underline">Log in</NavLink>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}
export default SignUp