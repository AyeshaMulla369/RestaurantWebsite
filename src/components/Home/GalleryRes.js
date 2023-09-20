import React, { useEffect } from "react";
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GalleryRes() {

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
    <div className='gallerysection' id="galleryid">
        <div className='gallery_images'>
            <img src='images\res1.png' alt='Img1' className='img1' data-aos="slide-left" data-aos-duration="14000"/>
            <img src='images\res2.png' alt='Img2'className='img2' data-aos="slide-right" data-aos-duration="14000"/>
            <img src='images\res3.png' alt='Img3'className='img3' data-aos="slide-left" data-aos-duration="14000"/>
        </div>
        <div className='gallery_text'>
            <p>
            &emsp;The name suggests a blend of modernity and a playful twist on traditional "bistro" and "food".Bistro Food is DelYang’s Kitchen strives to source local, sustainable and organic when possible. 
                We work hard to source premium ingredients and we cook everything from scratch with love.
                 We also do our best to pay our employees living wages 
                 (tips are shared with all employees, including kitchen staff) 
                 and to reduce our environmental footprint wherever we can. <br/><br/>&emsp;Overall, these factors translate to higher menu prices, 
                but we hope that you find value and feel a sense of comfort in knowing that 
                we aim to get better everyday at doing what is important to us.
            </p>
            <div className='vanisher'>
        <p>
        <br/><br/> &emsp;The name suggests a blend of modernity and a playful twist on traditional "bistro" and "food".Bistro Food is DelYang’s Kitchen strives to source local, sustainable and organic when possible. 
                We work hard to source premium ingredients and we cook everything from scratch with love.
                 We also do our best to pay our employees living wages 
                 (tips are shared with all employees, including kitchen staff) 
                 and to reduce our environmental footprint wherever we can. <br/><br/>&emsp;Overall, these factors translate to higher menu prices, 
                but we hope that you find value and feel a sense of comfort in knowing that 
                we aim to get better everyday at doing what is important to us.
                <br/><br/> &emsp;The name suggests a blend of modernity and a playful twist on traditional "bistro" and "food".Bistro Food is DelYang’s Kitchen strives to source local, sustainable and organic when possible. 
                We work hard to source premium ingredients and we cook everything from scratch with love.
                 We also do our best to pay our employees living wages 
                 (tips are shared with all employees, including kitchen staff) 
                 and to reduce our environmental footprint wherever we can.
            </p>
        </div>
        </div>
    </div>
  )
}

export default GalleryRes