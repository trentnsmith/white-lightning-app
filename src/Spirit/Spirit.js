import React, { Component } from 'react';
import SpiritContext from '../SpiritContext';
import './Spirit.css'

class Spirit extends Component {
    static contextType = SpiritContext;
    render () {
        let filteredSpirits = this.context.spirits;

        return (
            <ul className="spirit">
                {filteredSpirits.map((spirit) => {
            
            return(
                <li>
                    <h2>
                    {spirit.spirit_name} - {spirit.category}
                    </h2>
                    <h3>
                        {spirit.distillery_id}
                    </h3>
                    <span>
                        Aged: {spirit.age}
                    </span>
                    <span>
                        ABV: {spirit.abv}
                    </span>
                    <p>
                        {spirit.content}
                    </p>
                </li>
               
            )
            })}

            </ul>
        );
    };
};

export default Spirit;