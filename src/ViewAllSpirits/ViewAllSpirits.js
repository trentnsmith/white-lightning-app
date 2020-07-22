import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spirit from '../Spirit/Spirit';
import './ViewAllSpirits.css';

class ViewAllSpirits extends Component {
    render () {
        return (
            
            <div>
                <div className="view_spirits">
                    <div className="spirit_menu">
                       
                        <Spirit />
                        
                    </div>
                </div>
                <div className="add_spirit_div">
                <Link to='/add-spirits' className="add_spirit_link">
                    Add a New Spirit
                </Link>
                </div>
            </div>
        );
    };
};

export default ViewAllSpirits;