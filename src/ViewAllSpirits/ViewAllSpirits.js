import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        
                            <li >
                            
                                <Spirit 
                                    spirit_name={spirit.spirit_name}
                                    id={spirit.id}
                                    distillId={spirit.distillery_id}
                                    category={spirit.category}
                                    content={spirit.content}
                                    age={spirit.age}
                                    abv={spirit.abv}
                                />
                                
                            </li>
                        
                    )
                })}
                </ul>

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