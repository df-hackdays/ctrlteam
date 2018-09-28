var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find({}).lean().exec((err, data) => {
    const _data = data.map(d => {
      d.full_name = d.first_name + ' ' + d.last_name;
      d.age = 12;
      return d;
    });
    console.log(_data);
    res.jsonp(_data);
  });
});

module.exports = router;
