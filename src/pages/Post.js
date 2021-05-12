import React from 'react'
import {Link} from 'react-router-dom';
import posts from '../assets/Data/data'


export default function Post(id){
    console.log(posts)
    console.log(id.match.params.id)
    console.log(posts.id)
    const post = posts.filter(post => post.id == id.match.params.id)
    const postImage = post[0].image
    console.log(postImage)

    return (     
            <div className="body-container" href='#'>
                <div className="header-content text-md-center">
                      {posts.filter(post => post.id == id.match.params.id).map(filteredPost => (
                        <div className="header-content text-md-center">

                            <div className="col">
                                <h2 className="image-title">{filteredPost.title}</h2>
                                    <div class="fullscreen-video-wrap">
                                      <video src={"/videos/" +postImage} autoPlay loop muted>
                                      </video>
                                    </div>     
                                <span className="image-date">{filteredPost.description}</span>
                            </div>
                        </div>
                      ))}
               </div>
            </div>

    )
        
}