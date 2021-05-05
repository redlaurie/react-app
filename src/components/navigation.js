import React, {useState} from 'react';
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
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation">
            <span className="menu-title">My react app</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    { navLinks.map((link, index) => (

                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={()=> setMenuActive(!menuActive)}/>
    </nav>)
}