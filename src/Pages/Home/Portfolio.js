import React from 'react';
import paintBasic from '../../Aseeset/paintBasic.png'
import todo from '../../Aseeset/todo.png'
import toothcare from '../../Aseeset/toothcare.png'
import babayshop from '../../Aseeset/babyshop.png'
import furniture from '../../Aseeset/furniture-link.png'
import skyconvention from '../../Aseeset/sky-convention.png'
import { Link, useNavigate } from 'react-router-dom';
const Portfolio = () => {
    const portfolioData = [
      
        {
            _id:'101',
            projectName: 'Paint Basic | Full Stack',
            image: paintBasic,
            live:'https://paint-basic.web.app/',
            language:['HTML5','CSS3', 'tailwind', 'DaisyUI', 'React.JS','React Router', 'React hooks form', 'React Query', 'Node.js', 'Firbase Authentication', 'MonogoDB' ],
            details: `It is a manufacturing product selling website.Users will be able to buy products from here but if you want to buy products you have to buy more than the minimum order.A user will be able to update his profile and manage orders and be able to pay for product purchases.Admin will be able to manage how many orders.Admin will be able to deliver orders and add products.
            `,
            point:[
                'Users can buy products greater than the minimum quantity and pay with cards.',
                'Users can add reviews and show them on the home page. ',
                ' Admin and user can update their profile. ',
                ' Admin  can handle all user and and make user role ',
            ]
        },
        {
            _id:'102',
            projectName: 'My To do | Full-Stack',
            image: todo,
            live: 'https://todo-app-809d3.web.app/',
            language:['HTML5','CSS3', 'tailwind', 'DaisyUI', 'React.JS','React Router', 'React hooks form', 'React Query', 'Node.js', 'Firbase Authentication', 'MonogoDB' ],
            details:`Its a Todo app.user will be able to save his daily routine through the website.In the meantime, due to the use of the database, the user has to login at any time to see his routine.To log in you need to login with Google and GitHub or user password.In the meantime, the user will be able to manage the routine `,
            point:[
                'It is an inventory management website. Users can update stock.',
                'Google, Github, email password-based authentication system',
                'User can add products, and manage all products.'
            ]
        },
        {
            _id:'103',
            projectName: 'Tooth Care | Full-Stack',
            image: toothcare,
            live:'https://tooth-care-6684c.web.app/',
            language:['HTML5','CSS3', 'react-bootstrap', 'React.JS','React Router', 'React hooks form',  'Node.js', 'Firbase Authentication', ],
            details:`Its a personal Tooth care service webiste.A user will be able to receive services from within the website according to his / her problem. In order to receive the service, he / she will have to make an appointment.`,
            point:[
                'If the user wants to make an appointment, he needs to authentication.',
                'Google, Github, Facebook, and email password-based login system has been used for book appointments',
                'Attractive UI design'
            ]
        },
        {
            _id:'104',
            projectName: 'Furniture Link | Full-Stack',
            image: furniture,
            live:'https://furniturelink-2f045.web.app/',
            language:['HTML5','CSS3', 'React-bootstrap', 'React.JS','React Router', 'React hooks form', 'Node.js', 'Firbase-Authentication', 'MonogoDB' ],
            details:'This is inventory management website.Here the company will be able to manage its own products and tamilize how many products it has.You need to login to update product stock.If a product becomes a sale then you can manage it ',
            point:[
                'It is an inventory management website. Users can update stock.',
                'Google, Github, email password-based authentication system',
                'User can add products, and manage all products.'
            ]
        },
        {
            _id:'105',
            projectName: 'Sky Convention ',
            image: skyconvention,
            live:'https://elastic-austin-8e84ed.netlify.app/',
            details:'This is Sky convention center website.Conventional halls are rented here for weddings. There are four types of wedding plans.Wedding pro is the most populer plan.Reviews of customers are shown and Frequently Asked Questions and contacgt us system available.very atractive ui disinged are implemented.',
            point:[
                'Good looking Sliider and mordern uiux.',
                'Mordern and effective our packges desing',
                'reivew section and contact us section is the most effetive desing for customer attraction '
            ]
        }
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
                           <Link to={`/project/${data._id}`} style={{padding:'7px 15px', background:'#27AE60',marginLeft:'7px', color:'#fff',borderRadius:'4px', fontSize:'16px'}} >Details </Link>
                           </div>
                        </div>
                        
                </div>)
                }
            </div>
        </section>
    );
};

export default Portfolio;