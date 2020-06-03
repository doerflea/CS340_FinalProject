


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

  router.post('/update_img/:cat_id/:color_id', function (req, res) {
    console.log("updating img")
        var mysql = req.app.get('mysql');
        var sql_command = 'SELECT img_filepath_adult FROM color WHERE color.id=' + req.params.color_id
        console.log(sql_command);

        mysql.pool.query(sql_command, function (err, results, fields) {
          if (err) {
            console.log(JSON.stringify(err))
            res.write(JSON.stringify(err));
            res.end();
          } else {
            img = results[0].img_filepath_adult;
            var command = 'UPDATE cat SET cat.img_path="' + String(img) + '" WHERE cat.id=' + req.params.cat_id;

            mysql.pool.query(command, function (err, results, fields) {
              if (err) {
                console.log(JSON.stringify(err))
                res.write(JSON.stringify(err));
                res.end();
              } else { }
            });
          }
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
