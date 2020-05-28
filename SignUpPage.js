module.exports = function(){
    var express = require('express');
    var router = express.Router();

   //Renders sign up page
   router.get('/', function(req, res){
      res.render('SignUpPage');
    });

  //Creates new user, redirects to Catteries Page
  router.post('/', function(req, res){
    console.log(req.body)
       var mysql = req.app.get('mysql');
       var sql = "INSERT INTO user (password, username) VALUES (?,?)";
       var inserts = [req.body.password, req.body.username];
       sql = mysql.pool.query(sql,inserts,function(error, results, fields){
           if(error){
               console.log(JSON.stringify(error))
               res.write(JSON.stringify(error));
               res.end();
           }else{
               res.redirect('/LoginPage');
           }
       });
   });

    return router;
}();
