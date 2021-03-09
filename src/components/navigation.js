import React from 'react'

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
                        {link.title}
                    </li>
                ))}
            </ul>
    </nav>)
}