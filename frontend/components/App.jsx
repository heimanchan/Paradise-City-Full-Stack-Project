import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Modal from './modal/modal'
import Splash from './splash';
import SpotIndexContainer from './spot/spot_index_container';

const App = () => (
  <div>
    <Modal />
    
    <Switch>
      <Route path="/spots" component={SpotIndexContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
)

export default App;