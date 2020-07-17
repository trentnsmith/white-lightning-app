import React, { Component } from 'react';
import SpiritContext from '../SpiritContext';
import './Spirit.css'

class Spirit extends Component {
    static contextType = SpiritContext;
    render () {
        return (
            <div className="spirit">
                <h3 className="spirit_title">
                    Spirit Title from (Name of Distillery)
                </h3>
                <div className="spirit_category">
                    Category
                </div>
                <span className="spirit_age">
                    Age
                </span>
                <span className="spirit_abv">
                    ABV %
                </span>
                <div className="spirit_description">
                    lorem ipsum balh asdkfjalsdfj;JDF SDFJASODFJ A SDKJF;ASDFAJF; F ASDFJALSDFASJDFASDFJASD FA SDF;ALSKDJFASIDJF
                </div>
                
            </div>
        );
    };
};

export default Spirit;