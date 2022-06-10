import React from 'react';
import MyParticles from '../../Shared/MyParticles';

const Banner = () => {
    return (
        <>

            <section class="home" id="home">

            <MyParticles></MyParticles>
                <div class="content">
                    <h3>akash shil</h3>
                    <p>I am a Full-Stack web developer</p>
                    <a href="https://drive.google.com/file/d/1NdJh2ojwg9Bsguy0qM3PfP40QQ0iUI9W/view?usp=sharing" class="btn" target={'_blank'}>download cv</a>
                </div>

                <div class="share">
                    <a href="https://www.linkedin.com/in/akashshil/" class="fab fa-linkedin"></a>
                    <a href="https://www.facebook.com/profile.php?id=100007977125910" class="fab fa-facebook-f"></a>

                    <a href="https://twitter.com/akashshil227" class="fab fa-twitter"></a>
                    <a href="https://github.com/akashwebs" class="fab fa-github"></a>
                    <a href="https://stackoverflow.com/users/8905025/akashshil" class="fab fa-stack-overflow"></a>
                </div>
            </section>
        </>
    );
};

export default Banner;