import React from 'react'
import {Link} from 'react-router-dom';
import posts from '../assets/Data/data'


export default function Post(id){
    console.log(posts)
    console.log(id.match.params.id)
    console.log(posts.id)

    return (
        
        <a className="masonry-post overlay" href='#'>
            <div className="image-text">
                  {posts.filter(person => person.id == id.match.params.id).map(filteredPerson => (
                    <li>
                      {filteredPerson.title}
                    </li>
                  ))}
           </div>
        </a>
    )
        
}