import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css'; 

const Nav = () => {
    return (
        <div className="con1">
            <div className="con2">
                <div>
                    <img 
                        className="logo" 
                        src="https://res.cloudinary.com/dqura103a/image/upload/v1723271500/logo_1_qhv3sr.png" 
                        alt="Company logo" 
                    />
                </div>
                <div>
                    <h1 className="head">LOGO</h1>
                </div>
                <ul className="lists">
                    <li>
                        <FontAwesomeIcon className="item" icon={faMagnifyingGlass} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="item" icon={faHeart} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="item" icon={faBagShopping} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="item" icon={faUser} />
                    </li>
                    <li>
                        <form>
                            <select>
                                <option className="sel" defaultValue="ENG">ENG</option>
                                <option className="sel">TEL</option>
                                <option className="sel">HIN</option>
                            </select>
                        </form>
                    </li>
                </ul>
            </div>
            <ul className="list">
                <li className="options">SHOP</li>
                <li className="options">Skills</li>
                <li className="options">Stories</li>
                <li className="options">ABOUT</li>
                <li className="options">Contact US</li>
            </ul>                
        </div>
    );
}

export default Nav;
