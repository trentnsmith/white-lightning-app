import React, { Component } from 'react';
import './AddSpirits.css';
import SpiritContext from '../SpiritContext';
import { Link } from 'react-router-dom';
import config from '../config';

class AddSpirits extends Component {
    state = {
        spirit_name: {
            value: '',
            touched: false
        },
        distillsId: {
            value: null,
            touched: false
        },
        content: {
            value: '',
            touched: false
        },
        category: {
            value: '',
            touched: false
        },
        age: {
            value: '',
            touched: false
        },
        abv: {
            value: '',
            touched: false
        }
    };

    static contextType = SpiritContext;

    handleSpiritName = (e) => {
        let {spirit_name} = this.state
        spirit_name.value = e.target.value
        this.setState({spirit_name})
    };

    handleSpiritDistillsId = (e) => {
        let {distillsId} = this.state
        distillsId.value = e.target.value
        this.setState({distillsId})
    };

    handleContent = (e) => {
        let {content} = this.state
        content.value = e.target.value
        this.setState({content})
    };

    handleCategory = (e) => {
        let {category} = this.state
        category.value = e.target.value
        this.setState({category})
    };

    handleAge = (e) => {
        let {age} = this.state
        age.value = e.target.value
        this.setState({age})
    };

    handleAbv = (e) => {
        let {abv} = this.state
        abv.value = e.target.value
        this.setState({abv})
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let newSpirit = {
            spirit_name: this.state.spirit_name.value,
            distillery_id: this.state.distillsId.value,
            content: this.state.content.value,
            category: this.state.category.value,
            age: this.state.age.value,
            abv: this.state.abv.value
        };
        if (this.state.distillsId.value === null) {
            alert('please choose a distillery')
            return;
        }
        if (
            this.state.spirit_name, 
            this.state.content,
            this.state.age,
            this.state.abv,
            this.state.category
            // this.state.distillsId.value !== null
            ) {
            fetch(`${config.API_ENDPOINT}/spirits`,
                {   method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(newSpirit)
                })
            .then((response) => {
                return response.json();
            })
            .then((savedSpirit) => {
                this.context.addSpirit(savedSpirit)
                this.props.history.push('/all-spirits')
            })
            .catch((error) => {
                console.log(error)
            })   
            } else {
                alert('Please enter something')
            };
    };

    render () {
        return (
            <div className="add_spirits">
                <section className="add_section">
                    <h2>Add a new spirit</h2>
                    <form className="addspirit_form" onSubmit={this.handleFormSubmit}>
                        <div className="section">
                            <label className="name_label">
                                Name of the Spirit:
                            </label>
                            <input className="name_input" type="text" onChange={this.handleSpiritName} />
                        </div>
                        <div className="section">
                            <label className="distillery_choice">
                                Distillery:
                            </label>
                            <select onChange={this.handleSpiritDistillsId}>
                                <option value={null}>Choose Distillery</option>
                                {this.context.distills.map(distil => 
                                    <option
                                        key={distil.id}
                                        value={distil.id}>
                                            {distil.distillery_name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="section">
                            <label className="category_label">
                                Type of Spirit:
                            </label>
                            <input className="category_input" type="text" onChange={this.handleCategory} />
                        </div>
                        <div className="section">
                            <label className="age_label">
                                Aged:
                            </label>
                            <input className="age_input" type="text" onChange={this.handleAge} />
                        </div>
                        <div className="section">
                            <label className="abv_label">
                                ABV/Proof:
                            </label>
                            <input className="abv_input" type="text" onChange={this.handleAbv} />
                        </div>
                        <div className="section">
                            <textarea className="content" placeholder="Describe this spirit! Taste/Smell/Smoothness..." onChange={this.handleContent} />
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