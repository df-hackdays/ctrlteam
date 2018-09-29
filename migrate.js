

var mongoose = require('mongoose');
mongoose.connect('mongodb://scotiahacker:gh43fbA*2GVal@ds161041.mlab.com:61041/scotiahack');
var LectureModel = require('./models/lecture');

var lecture1 = new LectureModel({
    "title": "Lecture 2",
    "vlink": "njTh_OwMljA",
    "number": 2,
    "questions": [
        {
            "videos": [
                "NobHlGUjV3g",
                "vcQIFT79_50",
                "MZJhZTXhapU"
            ],
            "problem": "What is access time complexity of an linked list of size n?",
            "answers": [
                {
                    "answer": "1",
                    "correct": false
                },
                {
                    "answer": "n",
                    "correct": true
                },
                {
                    "answer": "n^2",
                    "correct": false
                }
            ]
        }
    ]
});
lecture1.save(console.log);