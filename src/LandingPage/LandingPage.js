import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
    render () {
        return (
            <div className="landing_page">
                <div className="lp_container">
                    <Link to='/distilleries' className="box">
                        (graphic)
                        <div>
                            Distilleries
                            Check out the Distilleries of Omaha
                        </div>
                    </Link>
                    <Link to='/all-spirits' className="box">
                        (graphic)
                        <div>
                            Spirits
                            Learn about the local whiskeys
                        </div>
                    </Link>
                    <Link to='/add-spirits' className="box">
                        (graphic)
                        <div>
                            Why White Lightning?
                            History of distilling and the connection to Omaha
                        </div>
                    </Link>
                </div>
            </div>
        );
    };
};

export default LandingPage;