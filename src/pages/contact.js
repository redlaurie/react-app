import React from 'react'
import { Helmet } from 'react-helmet';

export default function Contact (){
    return <div className="body-container">
                    <Helmet>
                        <title>JoeTannerPortfolio | Contact</title>
                    </Helmet>
                    <div className="wrapper-content">
                        <h1>Contact Me</h1>
                        <p><a href="https://www.linkedin.com/in/joetanner1999/">https://www.linkedin.com/in/joetanner1999/</a></p>
                        <p>joetanner1999@gmail.com</p>
                    </div>
            </div>
}