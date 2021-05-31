import React from 'react'
import { Helmet } from 'react-helmet';

export default function About (){
    return <div className="body-container">
                    <Helmet>
                        <title>JoeTannerPortfolio | About</title>
                    </Helmet>
                    <div className="wrapper-content">
                        <img src={require('./images/JoeTannerAbout.jpg').default} height="40%" width="200" class="center" border-radius="50%" object-fit='cover'  />
                        <p>I am originally from Bristol, studying Film Production in Cheltenham. Trying my hand at all the roles within Film, specialising within Producing and Management. Having only worked in small part time roles, film has enabled me to work on a much larger scale in a new and exciting industry and I'm now looking forward to securing full time work to kickstart my career.</p>

                    </div>

            </div>
}