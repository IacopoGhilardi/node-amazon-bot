const amazonLogin = require('../amazon/login');

module.exports = function(app){

    app.get('/', function(req, res){
        res.send('home');
    });

    app.get('/amazon/login', function(req, res){
        amazonLogin('iacopo.ghila@gmail.com', 'prova');
        res.send('ciao');
    });
}