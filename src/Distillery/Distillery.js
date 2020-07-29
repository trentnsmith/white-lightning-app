import React, { Component } from 'react';
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
                                <a className="distil_web" href={`https://${distil.website}`} target="_blank">
                                {distil.website}
                                </a>
                            </h4>
                            <p>
                                {distil.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default Distillery;