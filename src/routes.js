import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './views/base'
import App from './views/app'

export default (
  <Route path="/" component={Base} >
    <IndexRoute component={App} />
  </Route >
);
