
import React from 'react'
import Card from '../components/Card';
import Heading from './Heading';



const data =[
    {
        id: 0,
        title: "Cululater",
        desc: "A React & Next.js Based website  to help you find what dishes you can make if u have certain ingredients",
        img: "/calculator pic.jpg",
        Tags: ["React", "Node", "Next.js", "typescrepit"],

    },
    {
        id: 1,
        title: "Todo List",
        desc: "A React & Next.js Based website  to help you find what dishes you can make if u have certain ingredients",
        img: "/todo list pic.jpg",
        Tags: ["React", "Node", "Next.js", "typescrepit"],

    },
    {
        id: 2,
        title: "website",
        desc: "A React & Next.js Based website  to help you find what dishes you can make if u have certain ingredients",
        img : "/website.jpg",
        Tags: ["React", "Node","Next.js", "typescrepit" ],

    },
    
];

const Projects = () => {
  return (
    <div className="container pt-32">
        <Heading title =" My projects " />
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3
        place-items-center">
        
        {data.map((el) => 
        <Card
        key={el.id}
        title={el.title}
        desc={el.desc} 
        img={el.img}
        tags={el.Tags}/>
        )}
        
        </div>
    </div>
  );
};

export default Projects;
