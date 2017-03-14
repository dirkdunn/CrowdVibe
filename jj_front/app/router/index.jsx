import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


import Main from 'Main';
import About from 'About';
import Blog from 'Blog';
import Settings from 'Settings';
import Documentation from 'Documentation';



export default (
  <Router history={hashHistory}>
    <Route path="/">
			<Route path="About" component={About}/>
			<Route path="Main" component={Main}/>
      <Route path="Blog" component={Blog}/>
      <Route path="Settings" component={Settings}/>
      <Route path="Documentation" component={Documentation}/>
			<IndexRoute component={Main}/>
    </Route>
  </Router>
);
