var http = require("http");
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  if (request.method == "GET") {
    response.end("received GET request.");
  } else if (request.method == "POST") {
    let data = '';
  request.on('data', chunk => {
    data += chunk;
  })
  request.on('end', () => {
    console.log(JSON.parse(data).login); 
    response.end("received POST request.");
  })
   
    console.log("Recieved POST request");
    //console.log(request.headers)
  } else {
    response.end("Undefined request .");
  }
});

server.listen(8000);
console.log("Server running on port 8000");
