import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
       <div className="px-4 py-4 bg-gray-200 mx-auto sm:mx-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
         <div className='flex items-center justify-between'>
          <Link to={'/'} className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className='ml-2 text-xl font-semibold tracking-wide text-gray-400'>bookShop</span>
          </Link>
          {/* nav item section */}
         <ul className='items-center space-x-8 lg:flex'>
            <li>
                <NavLink
                to='/'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                to='books'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Books</NavLink>
            </li>
            <li>
                <NavLink
                to='about'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >About US</NavLink>
            </li>

         </ul>
          
        </div>
       </div>
    );
};

export default Header;