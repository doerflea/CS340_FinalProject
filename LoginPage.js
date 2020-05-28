global.owner_id = 1;

module.exports = function(){
    var express = require('express');
    var router = express.Router();

  router.post('/', function(req, res){
         console.log(req.body)
         var mysql = req.app.get('mysql');
         var inserts = [req.body.username, req.body.password];
         mysql.pool.query("SELECT * FROM user WHERE username = ? AND password = ?",inserts,function(error, results, fields){
            if(error){
                 console.log(JSON.stringify(error))
                 res.write(JSON.stringify(error));
                 res.end();
             }else if(results.length > 0){
               console.log(results)
                 res.redirect('/CatsPage');
             }
             else{
               console.log("no match")
             }
         });
     });

   router.get('/', function(req, res){
      res.render('LoginPage');
    });
    return router;
}();
