const express = require('express');
const cors = require('cors');

/********************************/
/*** Initialisation de API */
const app = express();

/********************************/
/*** Middelware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/********************************/
/*** Mise en place du routage */
app.get('/', (req, res) => {
    res.send('Route par défaut')
})

app.get("*", (req, res) => {
    res.status(501).send('Ressource non existante')
})

/********************************/
/*** Démarrer le serveur */
app.listen(8989, () => {
    console.log('Serveur OK !')
})
