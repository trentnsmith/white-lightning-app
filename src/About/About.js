import React, { Component } from 'react';
import './About.css';
import Spirit from '../Spirit/Spirit';

class About extends Component {
    render () {
        return (
            <div className="about">
                <div className="about_wl">
                    <div className="about_box">
                        <h2>
                            Why White Lightning?
                        </h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet elit 
                        elementum, ultricies sem at, gravida quam. Ut gravida magna sit amet eleifend
                        ullamcorper. Aenean et tellus dolor. Aenean sodales, sem sit amet suscipit
                        eleifend, magna lorem lacinia est, eu pharetra purus leo nec felis. Nullam 
                        efficitur quam eu risus blandit imperdiet. Orci varius natoque penatibus.
                        </div>
                    </div>
                    <div className="about_box">
                        <h2>
                            History of Distilling in Omaha
                        </h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet elit 
                        elementum, ultricies sem at, gravida quam. Ut gravida magna sit amet eleifend
                        ullamcorper. Aenean et tellus dolor. Aenean sodales, sem sit amet suscipit
                        eleifend, magna lorem lacinia est, eu pharetra purus leo nec felis. Nullam 
                        efficitur quam eu risus blandit imperdiet. Orci varius natoque penatibus.
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;