const User = require("./Userdb");
let UserdbControler = {}

UserdbControler.list = function(req, res){
    User.find({}).exec(function(err, users) {
        if(err){
            console.log("err");
        }else{
            res.jsons(users);
        }
    })
}

UserdbControler.add = function(req, res){
    let user = new 
}