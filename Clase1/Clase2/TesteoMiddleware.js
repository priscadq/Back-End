var express = require("express")
var app = express ()
//views
app.set('views','./views');
app.set('view engine', 'ejs');
// arrancar fs
var fs = require("fs")

//variables
let nombre= "prisca"
let apellido = "diaz"
let lt = [ "Argentina", "Alemania", "Brasil", "Peru", "Uruguay", "Chile"]

fs.readFile('todo.json', 'utf8', function (err, data) {
    if (err) throw err;    
  
    
})

app.get('/:param1', function (req, res, next) {
    console.log(req.query)
    console.log(req.params)
   res.send(req.params)
}); 






app.get('/', function (req, res, next) {
    res.render('myview', {nombre, apellido, lt})  
});
app.listen(3000, function () {  
  console.log('Server running at 3000'
)})