var express = require('express');
var router = express.Router();
ObjectId = require('mongodb').ObjectID;
const LectureModel = require('../models/lecture');
const UserModel = require('../models/user');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  const {lecture_id, questions} = req.body;
  LectureModel
    .findById({_id: lecture_id})
    .then(lecture => {
      const completed = [];
      Object.keys(questions).forEach(question_id => {
        const user_answer = questions[question_id];
        const question = lecture.questions.find(q => q._id.equals(question_id));
        const correct_answer = question.answers.find(ans => !!ans.correct);
        if(correct_answer.answer === user_answer) {
          completed.push(correct_answer._id);
        }
      });
      UserModel
        .findOne()
        .then(user => {
          let inProgressLecture = user.lectures.find(lec => lec.lecture_id.equals(lecture._id));
          if(!inProgressLecture) {
            inProgressLecture = {
              lecture_id: lecture._id,
              completed: completed,
              count: 1,
              done: lecture.questions.length === completed.length
            };
            user.lectures = [inProgressLecture];
          } else {
            inProgressLecture.completed = inProgressLecture.completed.concat(completed);
            inProgressLecture.done = lecture.questions.length === inProgressLecture.completed.length;
            inProgressLecture.count = inProgressLecture.count + 1;
          }
          return user.save();
        })
        .then(user => {
          const currentLecture = user.lectures.find(lec => lec.lecture_id.equals(lecture_id));
          return res.jsonp({
            pass: currentLecture.done
          });
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
