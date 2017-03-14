import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var Main = require('Main');
var store = require('configureStore').configure();
import router from 'app/router/';

$(document).foundation();

require ('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
