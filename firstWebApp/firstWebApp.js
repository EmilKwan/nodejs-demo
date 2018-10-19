// firstWebApp.js

// Step 1: 引入模块
var http = require("http");

// Step 2: 创建服务器
http.createServer(function(request, response) {
    // Step 3: 接收请求与响应请求
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888/");
