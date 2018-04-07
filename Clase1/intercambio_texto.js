var fs = require("fs")

fs.readFile("archivo2.txt", function callback(err, data){

   if(err) throw err

   let linea1 = data.toString()

   //console.log(data.toString())
   fs.readFile("archivo3.txt", function callback(err, data){

       if(err) throw err

       let linea2 = data.toString()
   
       //console.log(data.toString())

       fs.writeFile("archivo2.txt", linea2, function callback () {

           fs.writeFile("archivo3.txt", linea1, function callback () {

               console.log("Se intercambio todo")
           
           })
       })
   
       
   })

})