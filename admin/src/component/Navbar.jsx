import React, { useState } from 'react'
import { link } from '../utils/link'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar(props) {
    const [active, setActive] = useState();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const Auth = useAuth();
    return (
        <nav className='w-full h-[70px] sticky top-0 z-50 shadow'>
        <div className='flex justify-between items-center container mx-auto px-4'>
          <div>
            <p className='px-3 text-[30px] font-bold text-orange-600'>
              Admin<span className='text-black'>Panel</span>
            </p>
          </div>
          <div className='hidden md:flex space-x-4'>
            {link.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={`${active === link.name ? 'font-bold' : ''} px-3 text-lg`}
                onClick={() => {
                  setActive(link.name);
                  setMobileMenuOpen(false); // Close mobile menu on link click
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className='md:hidden'>
            <button 
              className='text-gray-800 focus:outline-none' 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden bg-white shadow-md'>
            <div className='flex flex-col space-y-2 p-4'>
              {link.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={`${active === link.name ? 'font-bold' : ''} block px-3 py-2`}
                  onClick={() => {
                    setActive(link.name);
                    setMobileMenuOpen(false); // Close menu on link click
                  }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

  )
}

export default Navbar