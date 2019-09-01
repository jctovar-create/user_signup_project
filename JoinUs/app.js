var express = require("express");
var app = express();
var mysql = require("mysql");

app.set("view engine", "ejs");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: "Finance23",
  database : 'join_us'
});


app.get("/", function(req, res){
  //find count of users in database
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(err, results){
    if(err) throw err;
    var count = results[0].count;
    res.render("home", {data: count});
  });
});

app.get("/joke", function(req, res){
  var joke = "What has four legs but can't walk? <em>A Chair!<em>";
  res.send(joke);
});

app.get("/random_num", function(req, res){
  var num = Math.floor(Math.random() * 100) + 1;
  res.send("Your lucky number is " + num);
});


// PORT ENTRY====================

app.listen(8080, function(){
    console.log("App is up")
});



//connection.end();

















/* 

WORKING WITH FAKER DATA===========================

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

INSERTING DATA=======================================================

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


INSERTING LOTS OF DATA======================
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

*/