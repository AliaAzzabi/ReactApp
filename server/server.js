const express = require('express');
const connectToDatabase = require("./connect");

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello server ...');
});


connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error("Erreur lors de la connexion à la base de données:", error);
        // Gérer l'erreur de connexion à la base de données
    });
