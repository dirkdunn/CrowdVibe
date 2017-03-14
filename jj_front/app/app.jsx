var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var About = require('About');


var store = require('configureStore').configure();
import router from 'app/router/';



// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
	<Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
