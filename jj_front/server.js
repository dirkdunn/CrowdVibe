const express = require('express');
//create the app
var http = require('http');
const PORT = process.env.PORT || 3000;
const INDEX = __dirname + '/index.html';
const path = require('path');
const webpack = require('webpack');
const webpackconfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();

// CHECK IF THE TRAFFIC IS ON HTTPS or convert to HTTP
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

// server to use , allows you to use functionality
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));
app.get('/', function(req, res, next){
  res.sendFile(__dirname + "/index.html");
});
/*
*   @summary For whatever the URL is just go to index
*/
app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
});
