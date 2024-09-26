import React, { useState } from 'react'
import { link } from '../link/link'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [active, setActive] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='w-full h-[100px] sticky m-0 pt-[30px]'>
            <div className='flex flex-col md:flex-row items-center container'>
                <div className='text-center md:text-left'>
                    {/* Logo */}
                </div>
                <div className='flex-1 md:flex md:justify-between md:px-[230px] px-4'>
                    <div className='hidden md:flex space-x-4'>
                        {link.map((link) => (
                            <NavLink key={link.id} to={link.path}
                                className={`${active === link.name ? 'font-bold' : ''} px-3`}
                                onClick={() => {
                                    setActive(link.name);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <button className='md:hidden' onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className={`md:flex justify-between items-center px-4 md:px-[6px] ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <div className='flex'>
                        <input type='text' placeholder='Search...' className='border p-1' />
                        {/* <button className='ml-2'><i className="fa-solid fa-magnifying-glass"></i></button> */}
                    </div>
                    <div className='flex space-x-4'>
                        <NavLink to={"/login"}><i className="fa-solid fa-user"></i></NavLink>
                        <NavLink to={"/addcart"}><i className="fa-solid fa-cart-plus"></i></NavLink>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
                {link.map((link) => (
                    <NavLink key={link.id} to={link.path}
                        className={`${active === link.name ? 'font-bold' : ''} block px-4 py-2`}
                        onClick={() => {
                            setActive(link.name);
                            setIsMobileMenuOpen(false); 
                        }}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default NavBar