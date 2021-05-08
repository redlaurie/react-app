import React from 'react'

export default function MasonryPost({post}){
    return (
        <a className="masonry-post overlay" href={post.link}>
            <div className="image-text">
                <div className="col">
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
        
}