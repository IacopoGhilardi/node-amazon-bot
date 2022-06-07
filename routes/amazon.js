module.exports = function(app){

    app.get('/', function(req, res){
        res.send('home');
    });

    app.get('/amazon/login', function(req, res){
        res.send('login');
    });
}