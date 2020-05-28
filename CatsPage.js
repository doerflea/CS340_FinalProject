module.exports = function(){
    var express = require('express');
    var router = express.Router();

   router.get('/', function(req, res){
     var mysql = req.app.get('mysql');
     mysql.pool.query('SELECT * FROM cat', function(err, rows, fields){
       res.status(200).render('CatsPage', {catData: rows});
     });
   });
    return router;

}();
