import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import DistilleriesPage from '../DistilleriesPage/DistilleriesPage';
import AddSpirits from '../AddSpirits/AddSpirits';
import ViewAllSpirits from '../ViewAllSpirits/ViewAllSpirits';
import './App.css';

class App extends Component {
  render () {
    return (
      <main className="app">
        <Nav />
        <BrowserRouter>
          <Route exact path='/' component={LandingPage} />
          <Route path='/distilleries' component={DistilleriesPage} />
          <Route path='/add-spirits' component={AddSpirits} />
          <Route path='/all-spirits' component={ViewAllSpirits} />
        </BrowserRouter>
        <Footer />
      </main>
    );
  };
};

export default App;