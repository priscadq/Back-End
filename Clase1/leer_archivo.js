var fs = require("fs")

const fileAsync = fs.readFile('archivo.txt', function callback (err, data) {


 if (err) throw err;
 var sp = data.toString().split(",")
 var suma = 0;
 var result = sp.map(function (x) { 
    suma += parseInt(x, 10);
    return suma;
});
 console.log("String =", sp,  "Suma =", suma);
});
