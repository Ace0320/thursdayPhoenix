let http = require("http") 
let url = require("url")

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"}) 
    response.write("Hello, We just received this request: " + request.url) 
    let query = url.parse(request.url, true).query
    response.writ("Name: "+ name+" Height: "+query.height)
    response.end() 
}

// create server & configure it with a callback function, invoked as each client connects
let server = http.createServer(onRequest) 
server.listen(8888)  // tell server to start listening on port 8888
console.log("Listening on port 8888")