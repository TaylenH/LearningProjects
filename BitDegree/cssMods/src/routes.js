import React from 'react';
import {Route, Redirect} from 'react-router';
import Main from './templates/main';
import Home from './templates/home';
import About from './templates/about';

export default (
  <Route component={Main}>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
  </Route>
);
