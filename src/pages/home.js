import React from 'react'
import {Carousel} from '3d-react-carousal';


export default function Home (){

    let slides = [
                    <img  src="/images/Screenshot_20210514-104757_Snapchat.jpg" alt="1" />,
                    <img  src="/images/Snapchat-2041651421.jpg" height="500" />  ,
                    <img  src="/images/JoeTanner2.jpg"/>  , ];
    return (
        <body>
            <header class="v-header">
                <div class="fullscreen-video-wrap">
                  <video src="/videos/PRIDE7_MD5701_120120.webm" autoPlay loop muted>
                  </video>
                </div>      
            </header>
            <div class="body-container">
                <div class="body-container">
                    <div class="header-content text-md-center">
                              <h1>Welcome Everyone!</h1>
                              <p>Hi my name is Joe Tanner and this is my Film portfolio. Feel free to look around and see my productions
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