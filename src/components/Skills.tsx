import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <div className="container pt-32">
       <Heading title =" My Skills " />
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3
        place-items-center"></div>
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up">
                <h2 className="text-4xl md:text-5xl text-white">Technologies i work with</h2>
                <p className="text-gray-300 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, doloribus exercitationem, expedita beatae nemo enim suscipit reiciendis corporis blanditiis sit eveniet illum id, assumenda deserunt voluptatum minus velit architecto vero?</p>
            </div>
            
            <div>
                <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                <div className="space-y-2">
                <h2 data-aos="zoom-in-up">Next.js</h2>
                <h2 data-aos="zoom-in-up">React.js</h2>
                <h2 data-aos="zoom-in-up">typesrecpit</h2>
                </div>

                
                <div className="space-y-2">
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2 data-aos="zoom-in-up">Css</h2>
                <h2 data-aos="zoom-in-up">Node</h2>
                </div>
                <div/>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Skills;
