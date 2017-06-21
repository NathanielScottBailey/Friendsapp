
// This creates my server
// and pass data using HTTP (Hypertext Transfer Protocol):
var express= require("express"); 					//require is a module loader, which is loading the express, assigning a variable
var app    = express();								//We are adding a variable to the above variable, and making it a function, which allows use express methods
var http   =require('http').Server(app);	 // require(http) allows node .js to talk in http, we made a variable.Our server will be using express to make a server	



app.use(express.static(__dirname + '/public'));		// Tell Node where to find static files in the public directory:
app.get('/', function(req,res){						//
	res.sendFile(__dirname + '/index.html');
});
http.listen(process.env.PORT || 3000, function(){	//.listen says to listen to this whatever comes after parenthesis, (process.env.PORT makes a enviroment, and allows me to be assigned a port )
	console.log('listening on *:3000');
});