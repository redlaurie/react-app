import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Login',
        path:'/login'
    }
]
export default function Navigation () {
    return (
    <nav className="site-navigation">
            <span>My react app</span>
            <ul>
                { navLinks.map((link, index) => (

                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
    </nav>)
}