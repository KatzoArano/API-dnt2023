const express = require('express');
const cors = require('cors');

/********************************/
/*** Import connexion à la BDD*/
let db = require('./db.config');

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
    res.send('Première route ')
})

app.get("*", (req, res) => {
    res.status(501).send('Ressource non existante')
})

/********************************/
/*** Start serveur avec test DB */
db.authenticate()
    .then(() => console.log('Database OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Serveur OK sur le port ${process.env.SERVER_PORT} !`)
        })
    })
    .catch(err => console.log('Database error', err))


