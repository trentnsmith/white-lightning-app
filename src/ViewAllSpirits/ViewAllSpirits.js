import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spirit from '../Spirit/Spirit';
import './ViewAllSpirits.css';

class ViewAllSpirits extends Component {
    render () {
        return (
            <div>
                <div className="view_spirits">
                    <ul className="spirit_menu">
                        <li>
                        <Spirit />
                        </li>
                    </ul>
                </div>
                <Link to='/add-spirits'>
                    Add a New Spirit
                </Link>
            </div>
        );
    };
};

export default ViewAllSpirits;