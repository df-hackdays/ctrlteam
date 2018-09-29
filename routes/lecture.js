var express = require('express');
var router = express.Router();
var LectureModel = require('../models/lecture');
var UserModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.findOne().then(user => {
    if(!user.lectures.length) {
      return null;
    }
    const notComplete = user.lectures.find(lecture => !lecture.done);
    return notComplete;
  })
  .then((currentLession) => {
    if(!currentLession) {
      return LectureModel.findOne().then(lecture => res.jsonp(lecture));
    }
    LectureModel.findById(currentLession.lecture_id)
    .then(lecture => {
      res.jsonp(lecture);
    });
  });
});

module.exports = router;
