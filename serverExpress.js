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

// Creando ruta para validar si parámetro n conincide 
// con número aleatorio
app.get("/abracadabra/conejo/:n", (req, res) => {
    // Creando número aleatorio entre 1 y 4
    const aleatorio = Math.floor(Math.random() * 4) + 1;
    // Recibiendo parametro n
    const numero = req.params.n;
    // Verificando si parámetro coincide con num aleatorio
    const imgRespuesta = (aleatorio == numero) ? 'conejito.jpg' : 'voldemort.jpg';
    // se envía la imagen como respuesta
    res.sendFile(path.join(__dirname, 'assets', imgRespuesta));
});

app.get("*", (req, res) => {
    res.send("<center><h1>Esta página no existe... </h1></center>");
});
