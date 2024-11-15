import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="container pt-8">
              <div className="text-xl font-medium text-slate-200 ">Irfan Ali Babbar</div>

      <div className="flex justify-end items-center" style={{marginTop:'-20px;'}}>

        <ul className="gap-13 lg:gap-10 hidden md:flex text-stone-200">
          <li className="menuLink">Home</li>
          <li className="menuLink">Project</li>
          <li className="menuLink">Skills</li>
          <li className="menuLink">About me</li>
          <li className="menuLink">Contact</li>
        </ul>

<div className='ml-4'>
        <AiOutlineMenu className="md:hidden" size={30}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

