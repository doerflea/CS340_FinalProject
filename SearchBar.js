module.exports = function(){
    var express = require('express');
    var router = express.Router();

   router.post('/', function(req, res){
     if (!req.session.loggedin){
        console.log("User is not logged in");
        res.status(200).render('LoginPage');
         return;
     }
     console.log("Search request received");
     var mysql = req.app.get('mysql');
     var sqlcommand = "SELECT cattery.name catteryName, cattery.id catteryId, user.id userID, user.username creatorName FROM (cattery LEFT JOIN user ON cattery.own_id=user.id) WHERE user.username='" + req.body.searchword + "' OR cattery.name='" + req.body.searchword + "'";
     mysql.pool.query(sqlcommand, function(err, rows, fields){
         if (err){
            console.log(JSON.stringify(err))
            res.write(JSON.stringify(err));
            res.end();
            return;
         }
     console.log(rows);
     res.status(200).render('CatteriesPage', {catteryData: rows});
    });

  });
    return router;
}();
