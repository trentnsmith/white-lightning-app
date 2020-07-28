import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
    render () {
        return (
            <div className="landing_page">
                <div className="background_container">
                <div className="lp_container">
                    <Link to='/distilleries' className="box">
                    <i class="fas fa-warehouse"></i>
                        <div>
                            Check out the Distilleries of Omaha
                        </div>
                    </Link>
                    <Link to='/all-spirits' className="box">
                    <i class="fas fa-wine-bottle"></i>
                        <div>
                            Learn about the local whiskeys
                        </div>
                    </Link>
                    <Link to='/about-page' className="box">
                    <i class="fas fa-question"></i>
                        <div>
                            Why White Lightning?
                            History of distilling and the connection to Omaha
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        );
    };
};

export default LandingPage;