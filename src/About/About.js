import React, { Component } from 'react';
import './About.css';

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
                        "White Lightning" was given as a nickname to a certain type of whiskey, originating
                        sometime in the 1800s. This white whiskey was made in secret and 
                        illegally. It was once produced in great quantities in South Carolina. It got its 
                        name from its color and the kick it delivers when consumed.
                        <br></br>
                        <br></br>
                        Often referred to as "moonshine" because it was usually produced at night, it is often
                        made under conditions so primitive that it has proved lethal. But its "proper" 
                        manufacture is considered an art form by some backwoods connoisseurs.
                        <br></br>
                        <br></br>
                        The whiskey is produced from mash, which is a mixture of grain, sugar, water, and yeast 
                        that ferments to produce the alcohol. Lack of aging leaves the whiskey with a clean 
                        "white" look. Distilleries are commonly made of copper for the most part, which, the 
                        producers think, helps maintain the flavor. Manufacturers usually make their own stills.
                        </div>
                    </div>
                    <div className="about_box">
                        <h2>
                            History of Distilling in Omaha
                        </h2>
                        <div>    
                        The first distillery in Omaha, NE was incorporated in 1871.  Willow Springs
                        Distilling Company produced a variety of alcohol and spirits, including gin, pure
                        rye, bourbon whiskeys, and mash.  In the 1880s, Willow Springs distilled 1,200
                        gallons of spirits every day. The distillery grew to become the nation's third
                        largest distillery before the Great Depression.
                        <br></br>
                        <br></br>
                        When Prohibition stopped the production of 
                        alcoholic beverages in 1919, the company became known as Willow Springs Bottling
                        and featured only beer, malt, and soda pop. 
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;