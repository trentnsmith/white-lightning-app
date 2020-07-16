import React, { Component } from 'react';
import './DistilleriesPage.css';

class DistilleriesPage extends Component {
    render () {
        return (
            <div className="distills">
                <div className="distills_container">
                    <h2>
                    The Distilleries of Omaha
                    </h2>
                    <section>
                        Distillery 1
                    </section>
                    <section>
                        Distillery 2
                    </section>
                    <section>
                        Distillery 3
                    </section>
                </div>
            </div>
        );
    };
};

export default DistilleriesPage;