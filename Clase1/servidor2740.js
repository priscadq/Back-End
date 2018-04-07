var http = require("http");

var fs = require("fs")
let text = "lalala"


fs.readFile("archivo2.txt", function callback(err, data){

    if(err) throw err
    let text = data.toString();
    
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Curso Backend</title>");
    response.write("</head>");
    response.write("<body>");
    response.write( text  );
    response.write("</body>");
    response.write("</html>");
    response.end();
   });
   
   
   
   server.listen(80);
   console.log("Server is listening");


});


/* 
-------------------------------------
otro metodo de cargar un servidor, cargando el html
--------------------------------------
var http = require("http");
var fs = require("fs")

var server = http.createServer(function(request, response) {
 response.writeHead(200, {"Content-Type": "text/html"});
 fs.readFile(__dirname + '/index.html', function(err, data){
   // Manejo de errores debería estar acá.
   response.end(data);
 });  
});

server.listen(80);
console.log("Server is listening");
--------------------------------------
html
---------------------------------------
<!DOCTYPE html>
<html>
<head>
   <title>Clase Backend</title>
</head>
<body>
Buenas noches clase!!
</body>
</html>*/