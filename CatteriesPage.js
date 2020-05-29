module.exports = function(){
    var express = require('express');
    var router = express.Router();

   router.get('/', function(req, res){
     var mysql = req.app.get('mysql');
     // SQL command that grabs the cattery name, creator name, and number of cats from
     // the user that is logged in.
     // TODO: Update this SQL command so we also get the catteries a user is visiting.
     var sqlcommand = 'SELECT cattery.name catteryName, user.id userID, user.username creatorName, COUNT(cat.id) numCats FROM cattery LEFT JOIN user ON cattery.own_id = user.id JOIN cat ON cat.cattery_id=cattery.id WHERE user.id=' + req.session.userID + ';';
     mysql.pool.query(sqlcommand, function(err, rows, fields){
     res.status(200).render('CatteriesPage', {catteryData: rows});
    });
  });
    return router;
}();
