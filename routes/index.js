module.exports = function(app, User)
{
    app.get('/api/users', function(req,res){
        User.find(function(err, users){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(users);
    });

    app.post('/api/signin', function(req, res){
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.pass = req.body.pass;

        user.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
            res.json({result: 1});
        });    
    });

    app.post('/api/login', function(req, res){
        res.end();
    });

    app.get('/api/logout', function(req, res){
        res.end();
    });

    app.get('/api/users/:user_id', function(req, res){
        res.end();
    });

    app.post('/api/users/:user_id', function(req, res){
        res.end();
    });

    

}
