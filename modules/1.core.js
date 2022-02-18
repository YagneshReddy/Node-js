// Http Server

var http = require('http')

http.createServer(function(request, response){
    console.log(request.url)
    if(request.url == '/'){
        response.end("welcome to node server")
    }

    if(request.url == '/employee'){
        response.end("Here is the employee data")
    }

    if(request.url == '/student'){
        response.end("Here is the student data")
    }
}).listen(8001)
