import React from 'react';

const Header = ({isture}) => {
    return (
        <div>
            <header className={`header ${isture ?'active':''}`}>
                <div class="user">
                    <img src="https://akashwebs.github.io/my-professional-portfolio-webiste/image/user-img.png" alt=""/>
                        <h3>Akash Shil</h3>
                        <p>full-stack developer</p>
                </div>


                <nav class="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#contact">contact</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;