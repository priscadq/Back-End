var fs = require('fs');
var express = require('express');
var app = express();
app.set('views','.');
app.set('view engine','ejs');

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

let productosGlobal = [] // igual a new Array()

//Codigo de ejercicio 2
app.get('/', function (request, response) {
	fs.readFile('productos.json',function (error, data) {
		if(error) throw error;
		response.render('sitio', {productosVista: JSON.parse(data)} )
	})
})

app.post('/cliente', function (request, response) {
	
	console.log(request.body.nombre)
	console.log(request.body.apellido)
	console.log(request.body.email)
	
	let libros = request.body.libros
	
	libros.forEach((libro) => {
		
		console.log(libro.nombre)
	})
	
	response.end()
})

var server = app.listen(89, function () {
    console.log("Example app listening at port 89")
 })