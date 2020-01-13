let http = require("http");
let fileSystem = require('fs');

http.createServer(function (request, response) {

    if(request.url == "/todo"){
        fileSystem.readFile('todo.json' , function (err, data) {
            if (err) return console.error(err);            
    
             response.writeHead(200, {'Content-Type': 'application/json'});
       
            response.end(data.toString());
        });
    }
    else if(request.url == "/index"){
        fileSystem.readFile('html.html' , function (err, data) {
            if (err) return console.error(err);            
    
             response.writeHead(200, {'Content-Type': 'text/html'});
       
            response.end(data.toString());
        });
    }
    else if(request.url == "/read-todo"){
        fileSystem.readFile('read-todo.html' , function (err, data) {
            if (err) return console.error(err);            
    
             response.writeHead(200, {'Content-Type': 'text/html'});
       
            response.end(data.toString());
        });
    }
    else{
        response.writeHead(301, {'Location':"http://" + request.headers['host'] + '/index'});
        response.end();
    }

}).listen(3000);
