import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Contact',
        path:'/contact'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Portfolio',
        path:'/portfolio'
    },

]
export default function Navigation () {
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation">
            <div className="row">
                <span className="menu-title">Joe Tanner</span>
                <span className="menu-title">Media Producer</span>
            </div>
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