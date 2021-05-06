import React from 'react'

export default function About (){
    return <div className="body-container">
                    <div className="wrapper-content">

                        <img src={require('./images/JoeTanner.jpg').default} height="100" width="100" class="center" />
                        <p>Hi I am also Joe and I am the producer of this film</p>
                        <p>joetanner1999@gmail.com</p>
                    </div>
            </div>
}