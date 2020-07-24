import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';
import './Nav.css';

class Nav extends Component {
    render () {
        return (
            <div className="Nav">
                <h1>
                    <Link to='/' className="h1_link">
                    White Lightning
                    </Link>
                </h1>
                <p>
                    Explore Omaha's Distilleries
                </p>
                <ul className="menu">
                    <li>
                        <Link to='/' className="menu_link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/distilleries' className="menu_link">
                            Distilleries
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-spirits' className="menu_link">
                            Spirits
                        </Link>
                    </li>
                    <li>
                        <Link to='add-spirits' className="menu_link">
                            About
                        </Link>
                    </li>
		        </ul>
                <Hamburger />
            </div>
        );
    };
};

export default Nav;