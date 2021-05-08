import React, { Component } from 'react'


class Post extends Component {
    render() {
        const post = this.props.post ? (
            <div>{post.id}</div>

        ) : (
            <div>Loading Post</div>
        )
        
        return (
            <div>lololollo</div>
        )
    
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return{
        post:state.posts.find((post) => {
        return post.id === id
        })
    }
}

export default(Post)