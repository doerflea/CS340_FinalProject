module.exports = function(){
    var express = require('express');
    var router = express.Router();

   router.get('/', function(req, res){
     if (!req.session.loggedin){
        console.log("User is not logged in");
        res.status(200).render('LoginPage');
         return;
     }
     var mysql = req.app.get('mysql');
     // SQL command that grabs the cattery name and creator's username for all the
     // catteries belonging to the user that is logged in
     // TODO: Update this SQL command so we also get the catteries a user is visiting.
     var sqlcommand = "SELECT cattery.name catteryName, cattery.id catteryId, user.id userID, user.username creatorName FROM (cattery LEFT JOIN user ON cattery.own_id=user.id) WHERE user.id=" + req.session.userID + " OR EXISTS (SELECT * FROM visiting WHERE cattery.id=visiting.cattery_id AND visiting.owner_id=" + req.session.userID + ")";
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

    /*
    sqlcommand = "SELECT cattery.name catteryName, cattery.id catteryId, user.id userID, user.username creatorName FROM (cattery LEFT JOIN user ON cattery.own_id=user.id) WHERE EXISTS (SELECT * FROM visiting WHERE cattery.id=visiting.cattery_id AND visiting.owner_id=" + req.session.userID + ")";


    mysql.pool.query(sqlcommand,function(err, rows, fields){
        if (err){
            console.log(JSON.stringify(err))
            res.write(JSON.stringify(err));
            res.end();
            return;
        }
        console.log(rows);
        res.status(200).render('CatteriesPage', {catteryData: rows});

    });
   */
  });
    return router;
}();
