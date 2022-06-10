import React from 'react';
import paintBasic from '../../Aseeset/paintBasic.png'
import todo from '../../Aseeset/todo.png'
import toothcare from '../../Aseeset/toothcare.png'
import babayshop from '../../Aseeset/babyshop.png'
import furniture from '../../Aseeset/furniture-link.png'
import skyconvention from '../../Aseeset/sky-convention.png'
const Portfolio = () => {
    const portfolioData = [
      
        {
            projectName: 'Paint Basic | Full Stack',
            image: paintBasic,
            live:'https://paint-basic.web.app/'
        },
        {
            projectName: 'My To do | Full-Stack',
            image: todo,
            live: 'https://todo-app-809d3.web.app/'
        },
        {
            projectName: 'Tooth Care | Full-Stack',
            image: toothcare,
            live:'https://tooth-care-6684c.web.app/'
        },
        {
            projectName: 'Furniture Link | Full-Stack',
            image: furniture,
            live:'https://furniturelink-2f045.web.app/'
        },
        {
            projectName: 'Baby Shop | Front-end',
            image: babayshop,
            live:'https://singular-malabi-c6d87a.netlify.app/'
        },
        {
            projectName: 'Sky Convention ',
            image: skyconvention,
            live:'https://elastic-austin-8e84ed.netlify.app/'
        },
    ]

    return (
        <section class="portfolio" id="portfolio">
            <h1 class="heading"> my <span>Projects</span></h1>

            <div class="box-container">
                {
                    portfolioData.map((data, index)=>  <div
                    key={index}
                     class="box">
                    <img src={data?.image} alt=""/>
                        <div style={{display:'grid', gridTemplateColumns:'1fr'}} class="content">
                            <h3 style={{display:'block'}}>{data?.projectName}</h3>
                           <div>
                           <a style={{padding:'7px 15px', background:'#27AE60', color:'#fff',borderRadius:'4px', fontSize:'16px'}} href={data.live}>Live </a>
                           <a style={{padding:'7px 15px', background:'#27AE60',marginLeft:'7px', color:'#fff',borderRadius:'4px', fontSize:'16px'}} href={data.live}>Details </a>
                           </div>
                        </div>
                        
                </div>)
                }
            </div>
        </section>
    );
};

export default Portfolio;