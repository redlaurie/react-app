import React from 'react'
import {Carousel} from '3d-react-carousal';


export default function Home (){

    let slides = [
                    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
                    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
                    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
                    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
                    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <body>
            <header class="v-header">
                <div class="fullscreen-video-wrap">
                  <video src="/videos/Techdemo.mp4" autoPlay loop muted>
                  </video>
                </div>      
            </header>
            <div class="body-container">
                <div class="body-container">
                    <div class="header-content text-md-center">
                              <h1>Welcome Everyone</h1>
                              <p>I am originally from Bristol, studying Film Production in Cheltenham. Trying my hand at all the roles within Film, specialising within Producing and Management. 
                                Having only worked within small part time roles, film has enabled me to work on a much larger scale in a new and exciting industry.
                              </p>
                    </div>
                </div>
            </div>
            <div class="slider-content text-md-center">
                <h1>Our Productions</h1>
                <Carousel slides={slides} autoplay={false} interval={1000}/>
            </div>
        </body>
    )
      
}