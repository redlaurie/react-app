import React from 'react'
import {Carousel} from '3d-react-carousal';


export default function Home (){

    let slides = [
                    <img  src="/images/Snapchat-789827423.jpg" height="500" alt="1" />,
                    <img  src="/images/Snapchat-1389564536.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-759109500.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-1286307169.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-1942039191.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-1218783245.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-285491417.jpg" height="500" />  ,
                    <img  src="/images/Snapchat-331436588.jpg" height="500"/>  , ];
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
                              <p>Hi my name is Joe Tanner and this is my Film portfolio. Feel free to look around and see my work
                              </p>
                    </div>
                </div>
            </div>
            <div class="slider-content text-md-center">
                <h1>Stills and Photos</h1>
                <Carousel slides={slides} autoplay={false} interval={1000}/>
            </div>
        </body>
    )
      
}