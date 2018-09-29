

var mongoose = require('mongoose');
mongoose.connect('mongodb://scotiahacker:gh43fbA*2GVal@ds161041.mlab.com:61041/scotiahack');
var UserModel = require('./models/user');

var user1 = new UserModel({

    "first_name": "paul",
    "last_name": "barretto",
    "email": "paul.barretto@scotiabank.com",
    "lecture": [
        {
            "lecture_id": "5baedb8ac1604705ab1c68b4",
            "completed": ["5baedb8ac1604705ab1c68b5"],
            "count": 0,
            "done": "false"
        }
    ]

});
user1.save(console.log);