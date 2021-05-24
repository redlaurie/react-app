import React from 'react'
import {Link} from 'react-router-dom';
import { generatePath, useRouteMatch } from "react-router-dom";

export default function MasonryPost({post}){
    console.log(post.id)
    const PostID  = post.id
    console.log(PostID)
    const PostImage = post.image
    const windowWidth = window.innerWidth
    const imageBackground = {backgroundImage: `url(${'/images/'+PostImage})`};
    
    console.log(imageBackground)
    const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground
    return (
        <a className="masonry-post overlay" style={style} href={"/post"+ "/"+ PostID }>
            <div className="image-text" style={{justifyContent: 'flex-end'}}>
                <div className="col">
                    <h2 className="image-title">{post.title}</h2>

                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
        
}