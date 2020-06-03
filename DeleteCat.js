module.exports = function () {
  var express = require('express');
  var router = express.Router();

  router.post('/:cat_id', function (req, res) {
    var mysql = req.app.get('mysql');
    
    console.log("DELETE CAT FUNCTION");
    var sqlcommand = "DELETE FROM cat WHERE cat.id=" + req.params.cat_id;
    console.log(sqlcommand);

    mysql.pool.query(sqlcommand, function (err, rows, fields) {
      if (err) {
        console.log(JSON.stringify(err))
        res.write(JSON.stringify(err));
        res.end();
        return;
      }
      console.log(rows);
      res.status(200).render('CatsInCatteryPage', { catData: rows });
    });
  });
  return router;
}();
