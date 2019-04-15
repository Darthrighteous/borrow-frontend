import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';
import Header from './components/header'
import Loader from './components/loader'
import Pages from './pages';

const { HomePage, ProfilePage, FourZeroFour } = Pages

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='overlay'>
        <Loader />
        <div className="app-ctx">
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/my-profile' component ={ProfilePage} />
            <Route component={FourZeroFour}/>
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
)

export default App;
