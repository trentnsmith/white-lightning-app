import React, { Component } from 'react';
import Spirit from '../Spirit/Spirit';
import SpiritContext from '../SpiritContext';
import './ViewAllSpirits.css';

class ViewAllSpirits extends Component {
    static contextType = SpiritContext;

    render () {
        let filteredSpirits = this.context.spirits;
        return (
            <div className="view_spirits">
                <ul className="spirit_menu">
                {filteredSpirits.map((spirit) => {
                    return(
                            <li className="spirit_li">
                                <Spirit 
                                    spirit_name={spirit.spirit_name}
                                    id={spirit.id}
                                    distillId={spirit.distillery_name}
                                    category={spirit.category}
                                    content={spirit.content}
                                    age={spirit.age}
                                    abv={spirit.abv}
                                />
                            </li>
                    )
                })}
                </ul>
            </div>
        );
    };
};

export default ViewAllSpirits;