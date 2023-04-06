var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '123456',
  database: 'lunch'
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

// router.get('/', function (req, res) {
//   connection.query('SELECT * FROM Restaurant', function (err, rows) {
//     if (err) throw err;
//     res.send(rows);
//   });
// });
// regist 
router.post('/regist', function (req, res){
  console.log('[POST] req.body: ', req.body);
  console.log('[POST] req.body.Distance: ', req.body.restaurant.Distance);
  const params = req.body;
  //const query = `INSERT INTO Restaurant (Name, MainMenu, Distance, Nat) VALUES ('${params.rname}','${params.MainMenu}','${params.Distance}','${params.Nat}');`;
  const query2 = 'INSERT INTO Restaurant (Name, MainMenu, Distance, Nat) VALUES ("'+params.restaurant.rname+'","'+params.restaurant.MainMenu+'","'+params.restaurant.Distance+'","'
  + params.restaurant.Nat + '")'
  
  const restaurant = {
    'rname': params.restaurant.rname,
    'MainMenu': params.restaurant.MainMenu,
    'Distance': params.restaurant.Distance,
    'Nat': params.restaurant.Nat,
  };
  console.log('[POST] store regist query: ', query2);
  connection.query(query2, restaurant, function (err,result) {
     if (err) {
       console.error(err);
      throw err;
     }
     console.log(result);
     res.status(200).send('success');
     
  });  
});

module.exports = router;