import React from 'react'
import Heading from "../components/Heading"
import AboutCard from "../components/AboutCard"


const aboutData = [
    {
        companyName: "Facebook",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis error laborum cupiditate quos accusantium fugit, quas provident, dolorem officiis mollitia nobis amet, distinctio repudiandae repellat!",
        name: "irfan Ali babbar",
        img: "/irfan Ali pic 2.jpg",
        position: "Software Engineer",
        link: "https://www.facebook.com/irfan.ali.babbar",
    },
    {
        companyName: "linkedin",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis error laborum cupiditate quos accusantium fugit, quas provident, dolorem officiis mollitia nobis amet, distinctio repudiandae repellat!",
        name: "irfan Ali babbar",
        img: "/irfan Ali pic 2.jpg",
        position: "Software Engineer",
        link: "https://www.linkedin.com/in/",
    },
    {
        companyName: "instagram",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis error laborum cupiditate quos accusantium fugit, quas provident, dolorem officiis mollitia nobis amet, distinctio repudiandae repellat!",
        name: "irfan Ali babbar",
        img: "/irfan Ali pic 2.jpg",
        position: "Software Engineer",
        link: "https://www.instagram/irfan_Ali_babbar",
    }
]

const About = () => {
  return (
    <div className="container pt-32">
        <Heading title="About me" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.map((item, index) =>(
                <AboutCard
                key={index}
                companyName={item.companyName}
                desc={item.desc}
                name={item.name}
                img={item.img}
                position={item.position} />
            ))}
        </div>
      
    </div>
  );
};

export default About;
