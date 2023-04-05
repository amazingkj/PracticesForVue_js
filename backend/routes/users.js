var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
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

router.get('/', function (req, res) {
  connection.query('SELECT * FROM Restaurant', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});
router.post('/regist', function (req, res){
  const restaurant = {
    'id': req.body.id,
    'rname': req.body.rname,
    'MainMenu': req.body.MainMenu,
    'Distance': req.body.Distance,
    'Nat': req.body.Nat
  };
  connection.query('INSERT INTO Restaurant (id, Name, MainMenu, Distance, Nat) VALUES ("'
  + restaurant.id + '", "'+restaurant.rname+'","'+restaurant.MainMenu+'","'+restaurant.Distance+'","'
  + restaurant.Nat + '")', restaurant, function (err) {
     if (err) {
       console.error(err);
      throw err;
     }
     res.status(200).send('success');
  });  
});