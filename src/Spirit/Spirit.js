import React, { Component } from 'react';
import SpiritContext from '../SpiritContext';
import './Spirit.css'
import config from '../config';

class Spirit extends Component {
    static contextType = SpiritContext;

    handleDeleteSpirit = () => {
        // this.context.deleteSpirit(this.props.id)
        fetch(`${config.API_ENDPOINT}/spirits/${this.context.spirits.id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => Promise.reject(event))
        })
        .then(() => {
            this.context.deleteSpirit(this.context.spirits.id)
        })
        .catch(error => {
            alert(error.message)
        })
    };

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
                    <button className="delete_spirit" onClick={this.handleDeleteSpirit}>
                        Remove this Spirit
                    </button>
                </li>
               
            )
            })}

            </ul>
        );
    };
};

export default Spirit;