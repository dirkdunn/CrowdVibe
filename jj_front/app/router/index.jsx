import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


import Main from 'Main';
import Results from 'Results';


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="Main" component={Main}/>
      <Route path="Results" component={Results}/>
			<IndexRoute component={Main}/>
    </Route>
  </Router>
);
