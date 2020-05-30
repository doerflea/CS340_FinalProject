module.exports = function(){
    var express = require('express');
    var router = express.Router();

    router.post('/', function(req,res){
        if (!req.session.loggedin){
            res.redirect('/LoginPage');
            return;
        }
        if (!(req.body.catteryName === req.body.confirmCatteryName)){
            console.log("Names do not match");
            res.redirect('back');
            return;
        }
        var mysql = req.app.get('mysql');
        // First check if the cattery exists
        var checksql = "SELECT * FROM cattery WHERE own_id= ? AND name= ?";
        var inserts = [req.session.userID, req.body.catteryName];
        mysql.pool.query(checksql, inserts, function(error, results, fields){
            if (error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
                return;
            }
            else if (results.length <= 0){
                console.log('Cattery not found');
                res.redirect('back');
                return;
            }
            var deletesql = "DELETE FROM cattery WHERE own_id=? AND name=?"
            mysql.pool.query(deletesql, inserts, function(error, results, fields){
                if (error){
                    console.log(JSON.stringify(error))
                    res.write(JSON.stringify(error));
                    res.end();
                    return;
                }
                res.redirect('CatteriesPage');
                
            });

            console.log(results);
        })
    });
   router.get('/', function(req, res){
      res.render('DeleteCatteryPage');
    });
    return router;
}();
