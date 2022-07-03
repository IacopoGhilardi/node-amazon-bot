const amazonLogin = require('../amazon/login');
const { chromium } = require('playwright');

module.exports = function(app){

    app.get('/', function(req, res){
        res.send('home');
    });

    app.get('/amazon/login', async (req, res) => {
        const response = amazonLogin('iacopo.ghila@gmail.com', 'ciao!');

        console.log('response', response);
    });
}