import { createConnection } from 'mysql';
import http from "http2";

var server = http.createServer((req,res) => {
	console.log(req);
	res.end();
}).listen(3333);

var connection = createConnection({
  host     : 'localhost',
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