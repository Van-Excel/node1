var fs = require('fs');
var http = require("http");

var options = {encoding: "utf-8"};
fs.readFile("./myfile.txt", options, function(err,data){
    if (err) {
        console.error("Error reading file");
        return;
    }
    console.log(data)

})
console.log("Hello world")

// create a request handler to handle the request

function requesthandler(req, res){

    // parsing the request object
    if (req.url === "/"){
        res.end("welcome to the home page")
    }else if (req.url === '/about'){
        res.end("welcome to the about page")
    }else {
        res.end("error! Page not found")
    }
    console.log(`Incoming request from ${req.url}`)
    
}


// creating a server

var server = http.createServer(requesthandler)
server.listen(3000)

