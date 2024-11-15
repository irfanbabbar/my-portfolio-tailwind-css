import React from 'react'
import Navbar from './Navbar';
const Hero=()=> {  
return (
    <div className="lg:bg-[url(/my_bg_pic.jpg)] min-h-screen bg-cover">
      <Navbar />
      <div className="Container grid lg:grid-cols-2 h-[calc(100vh-60)]">
      {/* <div className="hidden lg:block"></div> */}
      <div className="text-[50px] sm:text-[80px] pl-8 my-8 font-bold leading-tight flex justify-start items-start">
        <div>
          <p data-aos="zoom-in-up" className="text">Im</p>
          <p data-aos="zoom-in-up" className="text">Irfan Ali</p>
          <p data-aos="zoom-in-up" className="text">Full Stack</p>
          <p data-aos="zoom-in-up" className="text">Developer</p>
          </div>
        </div>
        </div>
      </div> 
  );
};

export default Hero;