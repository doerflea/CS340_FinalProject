module.exports = function () {
  var express = require('express');
  var router = express.Router();

  router.get('/', function (req, res) {
    if (!req.session.loggedin) {
      console.log("User is not logged in");
      res.status(200).render('LoginPage');
      return;
    }
    var mysql = req.app.get('mysql');
    // SQL command that grabs every cat in a specific cattery
    // TODO: there is a better way to do this
    // there is a cattery_id variable somewhere theoretically
    // this is really bad
    cattery_id = req.baseUrl.replace("/catteriesPage/", "");
    console.log(cattery_id);
    var sqlcommand = "SELECT * FROM cat WHERE cat.cattery_id=" + cattery_id;
    
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
