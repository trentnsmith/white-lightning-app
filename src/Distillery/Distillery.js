import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpiritContext from '../SpiritContext';
import './Distillery.css';

class Distillery extends Component {
    static contextType = SpiritContext;
    render () {
        return (
            <div className="distillery">
                {this.context.distills.map((distil) => {
                    return(
                        <div className="distillery_list">
                            <h3>
                                {distil.distillery_name}
                            </h3>
                            <h4>
                                {distil.website}
                            </h4>
                            <p>
                                {distil.description}
                            </p>
                        </div>
                    )
                })}
                <Link to='/all-spirits'>
                    View all Spirits
                </Link>
            </div>
        );
    };
};

export default Distillery;