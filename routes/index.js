module.exports = function(app)
{
    app.get('/api/users', function(req,res){
        res.end();
    });

    app.post('/api/signin', function(req, res){
        res.end();
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
