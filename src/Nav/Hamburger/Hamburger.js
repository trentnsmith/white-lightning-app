import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';

class Hamburger extends Component {
    
   
    render() {
        return (
            <div className="hamburger">
                <button>
                    <i class="fas fa-bars nav-toggle"></i>
                </button>
                <div className="main-navigation">
                <i class="fas fa-times"></i>
                <ul className="ham_menu">
                    <li>
                        <Link to="/" className="ham_link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Distilleries' className="ham_link">
                            Distilleries
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-spirits' className="ham_link">
                            Spirits
                        </Link>
                    </li>
                    <li>
                        <Link to='add-spirits' className="ham_link">
                            Add A New Drink
                        </Link>
                    </li>
                    <li>
                        <Link to='about' className="ham_link">
                            About
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        );
    };
};

export default Hamburger;