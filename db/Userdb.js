var mongoose = require('mongoose');  


var UserSchema = new mongoose.Schema({  
    name: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required: true},
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');