import React, { Component } from 'react';
import SpiritContext from '../SpiritContext';
import './Spirit.css'
import config from '../config';

class Spirit extends Component {
    static contextType = SpiritContext;

    handleDeleteSpirit = () => {
        console.log('this.props', this.props)
        fetch(`${config.API_ENDPOINT}/spirits/${this.props.id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => Promise.reject(event))
        })
        .then(() => {
            this.context.deleteSpirit(this.props.id)
        })
        .catch(error => {
            alert(error.message)
        })
    };

    render () {
        let { spirit_name, category, distillId, age, abv, content } = this.props;
        return (
            <div className="spirit">
                <div>
                    <h2>
                    {spirit_name} - {category}
                    </h2>
                    <h3>
                        {distillId}
                    </h3>
                    <span>
                        Aged: {age}
                    </span>
                    <span>
                        ABV: {abv}
                    </span>
                    <p>
                        {content}
                    </p>
                    <button className="delete_spirit" onClick={this.handleDeleteSpirit}>
                        Remove this Spirit
                    </button>
                </div>
            </div>
        );
    };
};

export default Spirit;