import React from 'react'
import posts from '../assets/Data/data'
import {PostMasonry} from '../components/'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';


export default function Portfolio (){
    
    return (
        <section className="container portfolio">
            <Helmet>
                <title>JoeTannerPortfolio | Portfolio</title>
            </Helmet>
            <div className="row">
            
                <h1>Productions</h1>
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