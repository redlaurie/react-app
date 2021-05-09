import React from 'react'
import posts from '../assets/Data/data'
import {PostMasonry} from '../components/'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


export default function Portfolio (){
    
    return (
        <section className="container portfolio">
            <div className="row">
            
                <h2>Productions</h2>
                <PostMasonry posts={posts} columns={3}/>
            </div>
        </section>
    )
        
}
const mapStateToProps = (state) => {
    return{
        posts:state.posts

        
        
    }
}