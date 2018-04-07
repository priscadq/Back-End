var express = require("express")
var app = express ()
app.set('views','./views');
app.set('view engine', 'ejs');

let nombre= "prisca"
let apellido = "diaz"
let paises = [ "Argentina", "Alemania", "Brasil", "Peru", "Uruguay", "Chile"]

app.get('/', function (req, res, next) {
      //res.send('Hello World!')   

      res.render('myview', {nombre, apellido, paises })  


});




app.listen(3000, function () {  
    console.log('Server running at 3000'
)})




/*
app.get('mipagina/'), function (req, res, next) {
    res.render('mivista', "mi nombre"
}



app.get ('/', function (req, res) {
    res.send(console.log('test!'))
})

app.post ('/', function (req, res) {
    res.send(console.log('test!'))
})



---------------------------------------
si queres pasar un parametro a la pagina, tiene que ser /user/:nombredelParametro  => req.params,userId
o querystring "?"" => . reg.query 


app.use(exoress.static(pulbic)) // para darle permiso a esa carpeta


*/