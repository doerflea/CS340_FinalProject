var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
//var handlebars = require('express-handlebars').create({defaultLayout: 'CatteryPage'});
var handlebars = require('express-handlebars').create();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.status(200).render('LoginPage');
});

app.get('/cats', function (req,res){
  var context = {};
  mysql.pool.query('SELECT * FROM cat', function(err, rows, fields){
  	res.status(200).render('CatteryPage', {catData: rows});
	});
});

app.get('/catteries', function (req,res){
    // SQL command that grabs the cattery name, creator name, and number of cats from
    // all catteries.
    var sqlcommand = 'SELECT cattery.name catteryName, user.name creatorName, COUNT(cat.id) numCats FROM cattery LEFT JOIN user ON cattery.own_id = user.id JOIN cat ON cat.cattery_id=cattery.id;';
    mysql.pool.query(sqlcommand, function(err, rows, fields){
  	res.status(200).render('ShowCatteries', {catteryData: rows});
	});
});

app.get('/login', function (req, res){
  res.status(200).render('LoginPage');
});

app.get('/signup', function (req, res){
  res.status(200).render('CreateAccountPage');
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(app.get('port'), function () {
  console.log("== Server is listening on port" + app.get('port'));
});
