module.exports = function(){
    var express = require('express');
    var router = express.Router();

   router.get('/', function(req, res){
     // SQL command that grabs the cattery name, creator name, and number of cats from
     // all catteries.
     var mysql = req.app.get('mysql');
     var sqlcommand = 'SELECT cattery.name catteryName, user.username creatorName, COUNT(cat.id) numCats FROM cattery LEFT JOIN user ON cattery.own_id = user.id JOIN cat ON cat.cattery_id=cattery.id;';
     mysql.pool.query(sqlcommand, function(err, rows, fields){
     res.status(200).render('CatteriesPage', {catteryData: rows});
    });
  });
    return router;
}();
