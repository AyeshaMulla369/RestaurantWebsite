import React, {useEffect} from 'react';
import './Menu.css';
import AOS from 'aos';


function Menu() {

  useEffect(()=>{
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
  },[]);

  return (
    <div className='menuSec' id='menuId'>
        <h1>Menu</h1>
        <div className='menu1'>
            <img src='images/menu.png' alt='menu1'data-aos="slide-right" data-aos-duration="10000" data-aos-once='true' />
            <img src='images/menu2.png' alt='menu1'data-aos="slide-left" data-aos-duration="10000" data-aos-once='true' />
        </div>
    </div>
  )
}

export default Menu