

var mongoose = require('mongoose');
mongoose.connect('mongodb://scotiahacker:gh43fbA*2GVal@ds161041.mlab.com:61041/scotiahack');
var LectureModel = require('./models/lecture');

var lecture1 = new LectureModel({
	"title": "Lecture 1",
    "vlink": "6tjYC86iV5E",
    "questions": [
        {
            "problem": "What is access time complexity of an array of size n?",
            "answers": [
                {
                    "answer": "1",
                    "correct": "true"
                },
                {
                    "answer": "n",
                    "correct": "false"
                },
                {
                    "answer": "n^2",
                    "correct": "false"
                }
            ]
        }
    ],
    "videos": [
        "VIQoUghHSxU",
        "RXWO3mFuW-I",
        "pGkSHeEZLMU"
    ]
});
lecture1.save(console.log);