/*Dependencies*/
var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.WATSON_API_USERNAME,
  password: process.env.WATSON_API_PASSWORD,
  version: 'v3',
  version_date: '2016-05-19 '
});

/* Text analyze */
router.get('/', function(req, res, next) {
  var textToAnalyze = req.body.analyze || 'A word is dead when it is said, some say. Emily Dickinson';

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

module.exports = router;
