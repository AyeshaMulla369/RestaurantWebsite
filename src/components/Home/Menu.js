import React, {useEffect} from 'react';
import './Menu.css';
import AOS from 'aos';


function Menu() {

  useEffect(()=>{
    AOS.init({
      // Global settings:
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    
    });
  },[]);

  return (
    <div className='menuSec' id='menuId'>
        <h1>Menu</h1>
        <div className='menu1'>
            <img src='images/menu.png' alt='menu1'data-aos="slide-right" data-aos-duration="10000"/>
            <img src='images/menu2.png' alt='menu1'data-aos="slide-left" data-aos-duration="10000"/>
        </div>
    </div>
  )
}

export default Menu