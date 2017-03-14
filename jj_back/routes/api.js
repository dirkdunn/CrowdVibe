/*
TODO:
  Connect to ticketmaster. Filter using city
  Connect to twitter API
  Filter tweets via coordinates
  Run Tweets through Watson to get mood
*/

// TM standard API url
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=o3BJoz7MHeA4gc4KtbnDyaz2yr76GowY

/*Dependencies*/
var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');
var request = require('request');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.WATSON_API_USERNAME,
  password: process.env.WATSON_API_PASSWORD,
  version: 'v3',
  version_date: '2016-05-19 '
});

/* Text analyze */
router.get('/watson', function(req, res, next) {
  var textToAnalyze = req.body.analyze || 'Analyze this mudda bugga!!!!';

  tone_analyzer.tone({ text: textToAnalyze },
    function(err, tone) {
      if (err){
        console.log('error occured.', err);
        res.json(err);
      }
      else{
        console.log(JSON.stringify(tone, null, 2));
        res.json(tone);
      }
  });
});

router.get('/ticketmaster',function(req,res){
  //https://app.ticketmaster.com/discovery/v2/events.json?apikey=o3BJoz7MHeA4gc4KtbnDyaz2yr76GowY&city=Austin
  // Austin360 Ampitheatre
  /*

  "longitude": "-97.64039993",
  "latitude": "30.13310378"

  requestBody._embedded.events (Array, ['_embedded']['venues']['location'])
  */

  var url ="https://app.ticketmaster.com/discovery/v2/events.json?apikey="+process.env.TM_API_KEY+"&city=Austin";
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);

    if(error){
      res.send(error)
    } else {
      var requestBody = JSON.parse(response.body);
      res.json(requestBody['_embedded']['events']);
    }
  });
});

module.exports = router;