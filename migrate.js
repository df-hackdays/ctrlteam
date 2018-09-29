var mongoose = require('mongoose');
mongoose.connect('mongodb://scotiahacker:gh43fbA*2GVal@ds161041.mlab.com:61041/scotiahack');
var LectureModel = require('./models/lecture');

var lecture1 = new LectureModel({
  "title":     "Video Lesson 1",
  "vlink":     "l26oaHV7D40",
  "number":    1,
  "questions": [
    {
      "problem": "What are boolean gates?",
      "answers": [
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Right choice",
          "correct": true
        }
      ],
      "videos":  [
        "gI-qXk7XojA",
        "LN0ucKNX0hc",
        "O5nskjZ_GoI"
      ]
    },
    {
      "problem": "What are the primary processors?",
      "answers": [
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Right choice",
          "correct": true
        }
      ],
      "videos":  [
        "FZGugFqdr60",
        "fpnE6UAfbtU",
        "1I5ZMmrOfnA"
      ]
    },

    {
      "problem": "What are number systems?",
      "answers": [
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Right choice",
          "correct": true
        }
      ],
      "videos":  [
        "nwDq4adJwzM",
        "zltgXvg6r3k",
        "1GSjbWt0c9M"
      ]
    },
    {
      "problem": "What is an operating system?",
      "answers": [
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Right choice",
          "correct": true
        }
      ],
      "videos":  [
        "KN8YgJnShPM",
        "TQCr9RV7twk",
        "26QPDBe-NB8"
      ]
    },
    {
      "problem": "What are the primary interfaces?",
      "answers": [
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Wrong choice",
          "correct": false
        },
        {
          "answer":  "Right choice",
          "correct": true
        }
      ],
      "videos":  [
        "XIGSJshYb90",
        "7Jr0SFMQ4Rs",
        "4RPtJ9UyHS0"
      ]
    },
  ]
});

LectureModel.remove({})
            .then(() => {
              lecture1.save(process.exit);
            });

