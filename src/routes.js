import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './views/base'
import Home from './views/home'
import About from './views/about'
import BecomeBrother from './views/becomeBrother'
import ActiveBrothers from './views/activeBrothers'
import Initiates from './views/initiates'
import Alumni from './views/alumni'

export default (
  <Route path="/" component={Base} >
    <IndexRoute component={Home} />
    <Route component={About} path="/About" />
    <Route component={BecomeBrother} path="/Become_a_Brother" />
    <Route component={ActiveBrothers} path="/Active_Brothers" />
    <Route component={Initiates} path="/Initiates" />
    <Route component={Alumni} path="/Alumni" />
  </Route>
);
