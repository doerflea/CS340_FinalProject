module.exports = function(){
    var express = require('express');
    var router = express.Router();


    router.post('/', function(req, res){
        console.log(req.body)
        if (!req.session.loggedin)
        {
            console.log("Can't join cattery, user is not logged in");
            return;
        }
        var mysql = req.app.get('mysql');
        var inserts = [req.session.userID, req.body.catteryname];


        /*The nested conditionals look kinda bad. If we want we can get rid of a few checks using triggers*/
        mysql.pool.query("SELECT * FROM visiting WHERE owner_id=? AND cattery_id=?", inserts,function(err, results, fields){
            if(err){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }
            else if(results.length > 0){
                console.log("Visiting entry already exists");
                res.redirect('CatteriesPage');
                res.end();
            }
            else{
                mysql.pool.query("SELECT * FROM cattery WHERE own_id<>? AND id=?", inserts,function(err,results,fields){
                    if(err){
                        console.log(JSON.stringify(error))
                        res.write(JSON.stringify(error));
                        res.end();
                    }
                    else if (results.length == 1){
                        mysql.pool.query('INSERT INTO visiting (owner_id, cattery_id) VALUES (?, ?);', inserts, function(err, results, fields){
                            if(err){
                                console.log(JSON.stringify(error))
                                res.write(JSON.stringify(error));
                                res.end();
                            }
                            else {
                                res.redirect('/CatteriesPage');
                            }
                        })
                    }
                    else{
                        console.log("Cattery not found");
                        res.redirect('/CatteriesPage');
                    }
                })
            }
        })
   });



   router.get('/', function(req, res){
      res.render('JoinCatteryPage');
    });
    return router;
}();
