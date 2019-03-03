import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';
import SearchNavContainer from '../components/nav_bar/search_nav_container';
import NavBarContainer from '../components/nav_bar/nav_bar_container';
import Modal from './modal/modal'
import Splash from './splash';
import SpotIndexContainer from './spot/spot_index_container';
import SearchContainer from './search/search_container';

// const nav = (location.href.split("#")[1] !== '/' ? <SearchNavContainer /> : <></> );
const App = () => (
  <div>
    <Modal />
    {/* {nav} */}
    <Switch>
      <Route path="/search" component={SearchContainer} />
      {/* <Route path="/spots" component={SpotIndexContainer} /> */}
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)

export default App;