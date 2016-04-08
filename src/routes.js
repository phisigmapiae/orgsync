import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Base from './views/base'
import Home from './views/home'
import About from './views/about'
import BecomeBrother from './views/becomeBrother'
import ActiveBrothers from './views/activeBrothers'
import Initiates from './views/initiates'
import Alumni from './views/alumni'
import Contact from './views/contact'

export default (
  <Route path="/org/phisigmapi" component={Base} >
    <IndexRoute component={Home} />
    <Redirect from="/org/phisigmapi/Home" to="/org/phisigmapi" />
    <Route component={About} path="/org/phisigmapi/About" />
    <Route component={BecomeBrother} path="/org/phisigmapi/Become_a_Brother" />
    <Route component={ActiveBrothers} path="/org/phisigmapi/Active_Brothers" />
    <Route component={Initiates} path="/org/phisigmapi/Initiates" />
    <Route component={Alumni} path="/org/phisigmapi/Alumni" />
    <Route component={Contact} path="/org/phisigmapi/Contact_Us" />
  </Route>
);
