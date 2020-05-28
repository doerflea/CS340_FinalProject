var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.set('mysql', mysql);


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/', function(req, res){
  res.status(200).render('LoginPage');
});

app.use('/LoginPage', require('./LoginPage.js'));
app.use('/SignUpPage', require('./SignUpPage.js'));
app.use('/DeleteCatteryPage', require('./DeleteCatteryPage.js'));
app.use('/JoinCatteryPage', require('./JoinCatteryPage.js'));
app.use('/CreateCatteryPage', require('./CreateCatteryPage.js'));
app.use('/CatteriesPage', require('./CatteriesPage.js'));
app.use('/CatsPage', require('./CatsPage.js'));

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log("== Server is listening on port" + app.get('port'));
});
