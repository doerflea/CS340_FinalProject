


module.exports = function(){
    var express = require('express');
    var router = express.Router();

  router.post('/data-feed-stat', function(req,res){
    console.log(req.body.stat)
    console.log(req.body.cat_id)
    mysql.pool.query('UPDATE cat SET feed_stat =' + req.body.stat 'WHERE id' = req.body.cat_id , function(err, rows, fields){
      if(error){
           console.log(JSON.stringify(error))
           res.write(JSON.stringify(error));
           res.end();
       }else
  });
  });


   router.get('/', function(req, res){
    var mysql = req.app.get('mysql');
     mysql.pool.query('SELECT * FROM cat WHERE owner_id =' + req.session.userID , function(err, rows, fields){
       res.status(200).render('CatsPage', {catData: rows});
     });
   });




    return router;
    }();
