var faker = require("faker");  
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: "Finance23",
  database : 'join_us'
});

//INSERTING LOTS OF DATA======================
var data = [];

for(var i = 0; i <= 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
        ]);
};

var q = 'INSERT INTO users (email, created_at) VALUE ?';

connection.query(q, [data], function(err, result){
    console.log(err),
    console.log(result)
});


connection.end();

















/* 

WORKING WITH FAKER DATA

function generateRandomInfo(){ 
    console.log(faker.internet.email());
    console.log(faker.date.past());
    console.log(faker.commerce.price());
    console.log(faker.finance.account());
    console.log(faker.hacker.phrase());
    console.log(faker.image.imageUrl());
    console.log(faker.internet.userName());
    console.log(faker.lorem.sentence());
    console.log(faker.name.jobTitle());
}

function generateInfo(){
    console.log(faker.name.firstName() + " " + faker.name.lastName() + " is a " + faker.name.jobTitle() + ".");
}

generateInfo();


PRACTICE GETTING USER DATA

var comments = "SELECT * FROM comments";

connection.query(comments, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});

var songs = "SELECT * FROM songs";

connection.query(songs, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].name);
});

var names = "SELECT * FROM names";

connection.query(names, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});


INSERTING DATA A FEW DIFFERENT WAYS
SELECTING DATA
var q = "SELECT * FROM users";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].email);
});

INSERTING DATA 

var q = 'INSERT INTO users (email) VALUES ("wyatt_thecat@gmail.com")';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});


INSERTING DATA A DIFFERENT WAY 
var person = {
    email: faker.internet.email(),
    created_at: faker.date.past()
};

console.log(faker.date.past());
console.log(person)

var end_result = connection.query('INSERT INTO users SET?', person, function(err,result){
    if(err) throw err;
    console.log(result);
});

console.log(end_result.sql);

*/