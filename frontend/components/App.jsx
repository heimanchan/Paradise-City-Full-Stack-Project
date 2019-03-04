import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Modal from './modal/modal';
import Splash from './splash';
import SearchContainer from './search/search_container';
import SpotShowContainer from './spot/spot_show/spot_show_container';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// const nav = (location.href.split("#")[1] !== '/' ? <SearchNavContainer /> : <></> );
const App = () => (
  <div>
    <Modal />
    {/* {nav} */}
    <Switch>
      <Route path="/spots/:spotId" component={SpotShowContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
)

export default App;