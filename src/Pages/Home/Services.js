import React from 'react';
import front from '../../Aseeset/icons/front-end.png'
import back from '../../Aseeset/icons/backend.png'
import fullstack from '../../Aseeset/icons/full-stack.png'
import bug from '../../Aseeset/icons/bug.png'
import publish from '../../Aseeset/icons/publishing.png'
import seo from '../../Aseeset/icons/seo.png'
const Services = () => {
    const services=[
        {name:'Front-End Development',icon:front, discription:'I can build  PSD, FIGMA to responsive website using React, Javascript, Bootstrap, Tailwind and CSS'},
        {name:'Back-End Development',icon:back, discription:' I am expert back-end developer in MERN stack or their framework like React or nodeJS etc. '},
        {name:'Full-Stack Web Development',icon:fullstack, discription:' I have built websites for a wide variety of industries. My code is clean and readable. '},
        {name:'Bug Fix',icon:bug, discription:'Front-end or Back-End webiste Any type of bug or error i can fix only 24 hours.'},
        {name:'Website Publish',icon:publish, discription:'If your have already a website i can host your website within 24 hours'},
        {name:'SEO',icon:seo, discription:'I can made Seo based website and sepeed optimaization'},
    ]
    
    return (
        <section class="services" id="services">
        <h1 class="heading">my <span>Services</span></h1>
        <div class="box-container">
           {
               services.map((data, index)=> <div key={index} class="box">
               <i><img style={{width:'5rem',marginBottom:'8px'}} src={data.icon} alt="" /></i>
               <h3>{data.name}</h3>
               <p>{data.discription}</p>
           </div>
)
           }
            
        </div>
    </section>
    );
};

export default Services;