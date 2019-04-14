import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import Pages from './pages';

const { HomePage, ProfilePage, FourZeroFour } = Pages

const App = () => (
  <Router>
    <div className="app-ctx">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/my-profile' component ={ProfilePage} />
        <Route component={FourZeroFour}/>
      </Switch>
    </div>
  </Router>
)

export default App;
