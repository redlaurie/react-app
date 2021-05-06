import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="header-content">
                <hr />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                    {/* Column1 */}
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Joe Tanner| All rights reserved
                    </p>
                    {/* Column2 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <p>Joe Tanner</p>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Footer