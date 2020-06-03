


module.exports = function () {
  var express = require('express');
  var router = express.Router();

  router.post('/update_data/:category/:stat/:cat_id', function (req, res) {
    var mysql = req.app.get('mysql');
    var sql_command = 'UPDATE cat SET cat.' + req.params.category + '=' + req.params.stat + ' WHERE cat.id=' + req.params.cat_id
    console.log(sql_command);
    mysql.pool.query(sql_command, function (err, rows, fields) {
      if (err) {
        console.log(JSON.stringify(err))
        res.write(JSON.stringify(err));
        res.end();
      } else { }
    });
  });


  router.get('/', function (req, res) {
    var mysql = req.app.get('mysql');
    mysql.pool.query('SELECT * FROM cat WHERE owner_id =' + req.session.userID, function (err, rows, fields) {
      res.status(200).render('CatsPage', { catData: rows });
    });
  });




  return router;
}();
