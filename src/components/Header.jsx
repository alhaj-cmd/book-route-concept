import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
          <div className="header">
          <h2>NavLink</h2>
          </div>
          <div className="header-item">
            <h2>Navbar</h2>
          {/* <Link to={home}>Home</Link>
           <Link to={about}>About</Link>
           <Link to={contact}>Contact</Link> */}
          </div>
          
        </div>
    );
};

export default Header;