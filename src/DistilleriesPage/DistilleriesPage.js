import React, { Component } from 'react';
import Distillery from '../Distillery/Distillery';
import './DistilleriesPage.css';

class DistilleriesPage extends Component {
    render () {
        return (
            <div className="distills">
                <div className="distills_container">
                    <h2 className="distil_h2">
                    The Distilleries of Omaha
                    </h2>
                    <section>
                        <Distillery />
                    </section>
                </div>
            </div>
        );
    };
};

export default DistilleriesPage;