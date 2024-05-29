import React, { useState } from 'react'
import { link } from '../link/link'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [active, setActive] = useState("")
    return (
        <nav className='bg-red-30 w-full h-[100px] sticky m-0 pt-[50px]'>
            <div className='flex items-center container'>
                <div>
             //log
                </div>
                <div className='px-[230px] '>
                    {link.map((link) => (
                        <NavLink key={link.id} to={link.path}
                            className={`${active === link.name ? 'font-bold' : ''} px-3 `}
                            onClick={()=>setActive(link.name)}
                        >{link.name}</NavLink>
                    ))}
                </div>
                <div className='px-[60px] '>
                    <div className='flex'>
                        <input type='text' placeholder='Search...' />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        <NavLink to={"/login"} className="px-4"><i class="fa-solid fa-user"></i></NavLink>
                        <NavLink to={"/addcart"} ><i class="fa-solid fa-cart-plus"></i></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar