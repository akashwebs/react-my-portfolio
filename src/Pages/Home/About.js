import React from 'react';

const About = () => {
    const skill = [
        { image: 'https://images.ctfassets.net/egbrauz6p94g/2PEtONWt44qQuOK62QEEKW/b2014f2a4e2dcb80a1a15a66d85aa513/Unofficial_JavaScript_logo_2.svg' },
        { image: 'https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' },
        { image: 'https://www.gstatic.com/devrel-devsite/prod/v48d5b7fe78425d6a73163cf28706f05fb6b7cff97bdc98bbcd2f38818604a511/firebase/images/touchicon-180.png' },
        { image: 'https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' },
        { image: 'https://daisyui.com/logos/svelte.svg' },

    ]
    return (
        <section class="about" id="about">
            <h1 class="heading">
                <span>about</span> me
            </h1>

            <div class="row">

                <div class="box-container">
                    <div class="box">
                        <h3>1+</h3>
                        <p>years of experience</p>
                    </div>
                    <div class="box">
                        <h3>22+</h3>
                        <p>Completed Projects</p>
                    </div>
                    <div class="box">
                        <h3>90+</h3>
                        <p>working hours</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}} class="box">
                        <div class="loader">
                            <div class="loader-square"><span>JS</span></div>
                            <div class="loader-square"><span>Tail</span></div>
                            <div class="loader-square"><span>API</span></div>
                            <div class="loader-square"><span>DB</span></div>
                            <div class="loader-square"><span>React</span></div>
                            <div class="loader-square"><span>Node</span></div>
                            <div class="loader-square"><span>CSS</span></div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h3>my name is <span>akash shil</span></h3>
                    <p>Creative problem solver with demonstrated capability to work on multiple systems simultaneously. My core skill is the MERN stack. I am a quick learner and always ready to learn and explore new technology. </p>
                    <a href="#contact" class="btn">contact me</a>
                </div>
            </div>
            <div class="row">
                <div class="progress">
                    <h3>MonogoDB <span>90%</span></h3>
                    <div class="bar bar-1-1"> <span></span></div>
                    <h3>Express <span>90%</span></h3>
                    <div class="bar bar-1-1"> <span></span></div>
                    <h3>Node.JS <span>90%</span></h3>
                    <div class="bar bar-1-3"> <span></span></div>
                </div>

                <div class="progress">
                    <h3>React.JS <span>90%</span></h3>
                    <div class="bar bar-2-1"> <span></span></div>
                    <h3>CSS <span>90%</span></h3>
                    <div class="bar bar-2-1"> <span></span></div>
                    <h3>javascript <span>90%</span></h3>
                    <div class="bar bar-2-1"> <span></span></div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', margin: '20px 0', gridGap: '7px' }}>
                {
                    skill.map((data, index) => <div>
                        <img key={index} style={{ width: '50%' }} src={data.image} alt="" />
                    </div>)
                }
            </div>


        </section>
    );
};

export default About;