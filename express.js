const express = require('express');
const app = express();
var fs = require("fs");

var beers = [];

app.get('/',function(req,res) {
	res.send('Hello World Express!');
	fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
		beers = JSON.parse(data);
	});
})

app.get('/add',function(req,res) {
	res.send("Cat added");
})

app.get('/listBeers',function(req,res) {
	console.log("my list of beers : \n" + JSON.stringify(beers));
	res.end( JSON.stringify(beers) );
})

var beer = 
    {
      "name" : "8.6",
      "id" : "huitSix",
      "alcohol" : "8.6",
      "descript": "Bière de clochard"
   }


//Add beer
app.post('/addBeer',function(req,res) {
	// fs.readFile(__dirname + "/" + "data.json",'utf8',function(err,data) {
	//    data = JSON.parse( data );
       
 //       res.end( JSON.stringify(data));
 //   });
	beers[beers.length+1] = beer;
	// console.log(beers);
	console.log("Beer added : " + beers);
	res.end("OK");
})

app.listen(3000,function() {
	console.log('Example app listening to port 3000!');
})