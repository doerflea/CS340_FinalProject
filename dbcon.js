var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit : 10,
   host 	: 'classmysql.engr.oregonstate.edu',
   user 	: 'cs340_doerflea',
   password 	: 'doerfler53',
   database	: 'cs340_doerflea'
});

module.exports.pool = pool;
