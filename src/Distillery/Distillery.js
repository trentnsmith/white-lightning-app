import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpiritContext from '../SpiritContext';
import './Distillery.css';

class Distillery extends Component {
    static contextType = SpiritContext;
    render () {
        return (
            <div className="distillery">
                <div>
                    <h3>
                        Distillery Here
                    </h3>
                    <div>
                        Description
                    </div>
                </div>
                <Link to='/all-spirits'>
                    View all Spirits
                </Link>
            </div>
        );
    };
};

export default Distillery;