import React, {useEffect} from 'react';
import './Menu.css';
import AOS from 'aos';


function Menu() {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='menuSec' id='menuId'>
        <h1>Menu</h1>
        <div className='menu1'>
            <img src='images/menu.png' alt='menu1'data-aos="slide-right" data-aos-duration="5000"/>
            <img src='images/menu2.png' alt='menu1'data-aos="slide-left" data-aos-duration="5000"/>
        </div>
    </div>
  )
}

export default Menu