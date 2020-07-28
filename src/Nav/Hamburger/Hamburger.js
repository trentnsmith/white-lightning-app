import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';

class Hamburger extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
          });
    }
   
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    };

    render() {
        return (
            <div className="hamburger">
                <button class="ham_button">
                    <i class="fas fa-bars" onClick={this.showMenu}></i>
                </button>

                {this.state.showMenu ? (
                    <div className="main-navigation">
                        <ul className="ham_menu">
                            <li className="ham_menu_items">
                                <Link to="/" className="ham_link">
                                    Home
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='/Distilleries' className="ham_link">
                                    Distilleries
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='/all-spirits' className="ham_link">
                                    Spirits
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='add-spirits' className="ham_link">
                                    Add A New Drink
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='about-page' className="ham_link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) :
                    (null)
                }

            </div>
        );
    };
};

export default Hamburger;