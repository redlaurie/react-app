import React from 'react'
import {Link} from 'react-router-dom';
import { generatePath, useRouteMatch } from "react-router-dom";

export default function MasonryPost({post}){
    console.log(post.id)
    const PostID  = post.id
    console.log(PostID)
    const PostImage = post.image

    return (
        <a className="masonry-post overlay" href={"/Post/"+ PostID }>
            <div className="image-text">
                <div className="col">
                    <h2 className="image-title">{post.title}</h2>
                        <img src={require('./images/'+PostImage).default} height="100" width="100" class="center" />
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
        
}