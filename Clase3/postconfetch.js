      // Con fetch
      fetch('http://localhost:3002/productos')
        .then((resultado) => { return resultado.json() } )
        .then((resultado) => {
          console.log(resultado)
        })