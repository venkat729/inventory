const mysql = import('mysql');
const express = import('express');
const http = import('http');
const app = express();

var server = http.createServer(app).listen(3333,function(err) {
  if (err) {
    console.log(err);
  } else {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening on ${host}:${port}`);
  }
});

var connection = mysql.createConnection({
  host     : '192.168.1.150',
  user     : 'root',
  password : 'admin',
  database : 'inventory'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('You are now connected...')
})

// router.post('/add_material', function(req, res, next) {
// 	const { material_code, item_description, balance, po_number, remarks } = req.body;
// 	const user_sql = `INSERT INTO materials VALUES (${material_code}, ${item_description}, ${balance}, ${po_number}, ${remarks})`;
//   connection.query(user_sql, function (err, rows, fields) {
// 		if (err) throw err
// 		console.log(rows);
// 		res.send(JSON.stringify(rows));
// 	});
// });