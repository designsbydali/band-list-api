var express = require('express');
var router = express.Router();


var Band = require('../models/band');
var _ = require('lodash');

//MIDDLEWARE FUNCTION
router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])

  next()
})

//GET band
router.get('/', function (req, res, next) {
  Band.find({}, function (err, bands) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(bands)
    }
  })
});



























module.exports = router;
