module.exports = function(){
    var express = require('express');
    var router = express.Router();

    router.post('/', function(req, res){
        if (!req.session.loggedin)
        {
            console.log("Can't create cattery, user is not logged in");
            return;
        }
        var mysql = req.app.get('mysql');
        var inserts = [req.body.catteryname, req.session.userID];
        var sql = "INSERT INTO cattery (name, own_id) VALUES (?, ?);"
        mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
                //return;
            }
            else {
                res.redirect('/CatteriesPage');
            }
        })
   });

   router.get('/', function(req, res){
      res.render('CreateCatteryPage');
    });
    return router;
}();
