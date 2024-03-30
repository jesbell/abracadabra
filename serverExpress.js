// Creando instancia express
const express = require('express');
// Guardamos en una constante app 
const app = express();

// Se crea un arreglo de nombres
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian'];

// Creando servidor con express en puerto 3000
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000');
});

const path = require("path");
//Definiendo carpeta "assets" como pública
app.use(express.static(path.join(__dirname, "assets")));

// Devolviendo arreglo usuarios en formato Json
app.get('/usuarios', (req, res) => {
    res.json({usuarios: usuarios});
});

// Agregando middleware
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const usuario = req.params.usuario;
    // Buscando si el usuario existe en el arreglo
    if(usuarios.includes(usuario)){
        next();
    }
    else{
        // Si no existe usuario responde con esta imagen de error
        const imagenError = path.join(__dirname, 'assets', 'who.jpeg');
        res.sendFile(imagenError);
    }

});

// Creando un get que devuelva el documento index.html
app.get('/abracadabra/juego/:usuario', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});



app.get("*", (req, res) => {
    res.send("<center><h1>Sorry, aquí no ha nada :/ </h1></center>");
});
