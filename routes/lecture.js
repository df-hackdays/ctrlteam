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
  .then((currentLecture, user) => {
    if(!currentLecture) {
      return LectureModel.findOne().then(lecture => res.jsonp(lecture));
    }

    console.log("currentlecture", currentLecture);
    LectureModel.findById(currentLecture.lecture_id)
    .then(lecture => {
      //filer out ino
      const pendingQuestions = [];
      lecture.questions.forEach(q => {
        const found = currentLecture.completed.find(c => q._id.equals(c));
        if(!found) {
          pendingQuestions.push(q);
        }
      });
      lecture.questions = pendingQuestions;
      res.jsonp(lecture);
    });
  });
});

module.exports = router;
