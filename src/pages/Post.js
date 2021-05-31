import React, { useRef} from 'react'
import {Link} from 'react-router-dom';
import posts from '../assets/Data/data'
import { Helmet } from 'react-helmet';

export default function Post(id){
    console.log(posts)
    console.log(id.match.params.id)
    console.log(posts.id)
    const post = posts.filter(post => post.id == id.match.params.id)
    const postImage = post[0].video
    console.log(postImage)
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        vidRef.current.play();
    }

    return (     
            <div className="body-container" href='#'>
                <Helmet>
                    <title>JoeTannerPortfolio | post</title>
                </Helmet>
                <div className="header-content text-md-center">
                    <div className="youtube-content">
                      {posts.filter(post => post.id == id.match.params.id).map(filteredPost => (
                        <div className="header-content text-md-center">
                            <div className="col">
                                <h2 className="image-title">{filteredPost.title}</h2>
                                    <div class="fullscreen-video-wrap">
                                            <iframe width="800" height="315" src={filteredPost.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>     
                                <span className="image-date">{filteredPost.description}</span>
                            </div>
                        </div>
                      ))}
                    </div>
               </div>
            </div>

    )
        
}