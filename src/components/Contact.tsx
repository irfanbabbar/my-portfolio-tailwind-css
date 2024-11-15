import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import Heading from './Heading'


const Contact = () => {
  return (
    <div className="pt-32 container">
        <Heading title =" Contact " />
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3
        place-items-center"></div>
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl" data-aos="zoom-in-up">Get in Touch</h2>
                <p className="text-gray-300 text-[18px] pt-2" data-aos="zoom-in-up">
                    Feel free to reach out! Im always looking for opportunities to collaborate or work together.
                </p>

                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <AiOutlineMail size={30} /> irfan.babbar@gmail.com
                </div>
                
                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <BsTelephone size={30} /> +92314 7780555
                </div>

            </div>

             <div className="space-y-8">
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="h-[40px] bg-transparent border border-accent" id="name" />
                </div>
                
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="h-[40px] bg-transparent border border-accent" id="email" />
                </div>
                
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea rows={5} className="h-[120px] bg-transparent border border-accent" id="message" />
                    <button className="py-1 px-8 mx-2 text-white bg-accent hover:bg-accent-dark transition-all duration-200" data-aos="zoom-in-up" style={{height:'3rem', width:'8rem'}}>Submit</button>

                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <button className="py-1 px-8 mx-2 text-white bg-accent hover:bg-accent-dark transition-all duration-200" data-aos="zoom-in-up" style={{height:'3rem', width:'8rem'}}>Submit</button>

                </div>
                
                 
             </div>

        </div>
      
    </div>
  )
}

export default Contact;
