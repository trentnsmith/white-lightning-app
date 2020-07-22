import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SpiritContext from '../SpiritContext';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import DistilleriesPage from '../DistilleriesPage/DistilleriesPage';
import AddSpirits from '../AddSpirits/AddSpirits';
import ViewAllSpirits from '../ViewAllSpirits/ViewAllSpirits';
import About from '../About/About';
import config from '../config';
//import DATA from '../dummy-data';
import './App.css';

class App extends Component {
  //Setting State
  state = {
    distills: [],
    spirits: []
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/distilleries`)
    .then((resp) => {
      return resp.json()
    })
    .then((distills) => {
      this.setState({distills})
    })
    fetch(`${config.API_ENDPOINT}/spirits`)
    .then((resp) => {
      return resp.json()
    })
    .then((spirits) => {
      this.setState({spirits})
    })
  };

  handleAddSpirit = (newSpirit) => {
    this.setState({
      spirits: this.state.spirits.concat(newSpirit)
    });
  };

  handleDeleteSpirit = (id) => {
    this.setState({
      spirits: this.state.spirits.filter(spirit => spirit.id !== id)
    });
  };

  render () {
    let value = {
      distills: this.state.distills,
      spirits: this.state.spirits,
      addSpirit: this.handleAddSpirit,
      deleteSpirit: this.handleDeleteSpirit
    };
    return (
      <SpiritContext.Provider value={value}>
        <main className="app">
          <Nav />
          <BrowserRouter>
            <Route exact path='/' component={LandingPage} />
            <Route path='/distilleries' component={DistilleriesPage} />
            <Route path='/add-spirits' component={AddSpirits} />
            <Route path='/all-spirits' component={ViewAllSpirits} />
            <Route path='/about-page' component={About} />
          </BrowserRouter>
          <Footer />
        </main>
      </SpiritContext.Provider>
    );
  };
};

export default App;