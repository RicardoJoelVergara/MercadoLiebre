const express = require('express');
const app = express();
const path = require('node:path');
// Routes

//app.get('/', ( req, res ) =>{
  //  const pathHome = path.join(__dirname, 'views/home.html')
    
  //res.sendFile(pathHome);
//} )
app.get('/', ( req, res ) =>{
  const pathHome = path.join(__dirname, 'views/home.html')
  
res.sendFile(pathHome);
} )
app.get('/registro', ( req, res ) =>{
  const pathRegistro = path.join(__dirname, 'views/registro.html')
res.sendFile(pathRegistro);
} )
app.get('/ingreso', ( req, res ) =>{
res.sendFile( path.join(__dirname, 'views/ingreso.html'));
} )

 // Public (static) Listen Server
 app.use(express.static('public'))

 const PORT = process.env.PORT || 3000;

 app.listen( PORT, () => console.log(`Server up on PORT: http://localhost:${PORT}`) )