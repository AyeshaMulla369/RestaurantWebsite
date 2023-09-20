import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink smooth to='/#homew' className='navbar-logo' onClick={closeMobileMenu}>
            BiSTRO F00d
            <i class="fas fa-hamburger"></i>
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink 
                smooth to='/#homew' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/res'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Reserve
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/#contactPage'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;