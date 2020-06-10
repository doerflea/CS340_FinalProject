module.exports = function () {
  var express = require('express');
  var router = express.Router();

  router.post('/:cattery_id/:new_name', function (req, res) {
    var mysql = req.app.get('mysql');

    console.log("renamecattery:");
    console.log(req.params.cattery_id);
    console.log(req.params.new_name);

    
    var sqlcommand = "UPDATE cattery SET cattery.name = '" + req.params.new_name + "' WHERE cattery.id = " + req.params.cattery_id;
    console.log(sqlcommand);
    mysql.pool.query(sqlcommand, function (err, rows, fields) {
      if (err) {
        console.log(JSON.stringify(err))
        res.write(JSON.stringify(err));
        res.end();
        return;
      }
      console.log(rows);
    });
  });
  return router;
}();
