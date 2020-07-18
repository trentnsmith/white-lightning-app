import React, { Component } from 'react';
import './AddSpirits.css';
import SpiritContext from '../SpiritContext';
import { Link } from 'react-router-dom';

class AddSpirits extends Component {
    static contextType = SpiritContext;
    render () {
        return (
            <div className="add_spirits">
                <section className="add_section">
                    <h2>Add a new spirit</h2>
                    <form className="addspirit_form">
                        <div className="section">
                            <label className="name_label">
                                Name of the Spirit:
                            </label>
                            <input className="name_input" type="text" />
                        </div>
                        <div className="section">
                            <label className="distillery_choice">
                                Distillery:
                            </label>
                            <select>
                                <option value={null}>Choose Distillery</option>
                                {this.context.distills.map(distil => 
                                    <option
                                        key={distil.id}
                                        value={distil.id}>
                                            {distil.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="section">
                            <label className="category_label">
                                Type of Spirit:
                            </label>
                            <input className="category_input" type="text" />
                        </div>
                        <div className="section">
                            <label className="age_label">
                                Aged:
                            </label>
                            <input className="age_input" type="text" />
                        </div>
                        <div className="section">
                            <label className="abv_label">
                                ABV/Proof:
                            </label>
                            <input className="abv_input" type="text" />
                        </div>
                        <div className="section">
                            <textarea className="content" placeholder="Describe this spirit! Taste/Smell/Smoothness..." />
                        </div>
                        <div className="submit_section">
                            <input className="form_submit" type="submit" value="Add Spirit" />
                        </div>
                        <div className="cancel_section">
                            <Link className="cancel_link" to='/all-spirits'>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        );
    };
};

export default AddSpirits;