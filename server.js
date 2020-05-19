var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'CatteryPage'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(express.static('public'));

app.get('/', function (req,res){
  var context = {};
  mysql.pool.query('SELECT * FROM cat', function(err, rows, fields){
  	res.status(200).render('makeCats', {catData: rows});
	});
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(app.get('port'), function () {
  console.log("== Server is listening on port" + app.get('port'));
});
