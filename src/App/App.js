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
import DATA from '../dummy-data';
import './App.css';

class App extends Component {
  //Setting State
  state = {
    distills: DATA.distills,
    spirits: DATA.spirits
  };

  render () {
    let value = {
      distills: this.state.distills,
      spirits: this.state.spirits
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