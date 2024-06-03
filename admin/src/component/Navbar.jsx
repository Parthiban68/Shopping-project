import React, { useState } from 'react'
import { link } from '../utils/link'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar(props) {
    const [active, setActive] = useState()
    const Auth = useAuth()
    return (
        <nav className='bg-red-30 w-full h-[100px] sticky m-0 pt-[30px]'>
        <div className='flex justify-between align-center items-center container'>
            <div>
         <p className='px-3 text-[30px] font-bold text-orange-600'>Admin<span className='text-black'>Panel</span></p>
            </div>
            <div>

                {link.map((link) => (
                    <NavLink key={link.id} to={link.path}
                        className={`${active === link.name ? 'font-bold' : ''} px-3 `}
                        onClick={()=>setActive(link.name)}
                    >{link.name}</NavLink>
                ))}
            </div>
            </div>
            </nav>    

  )
}

export default Navbar