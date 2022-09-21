/********************************/
/*** Import modules*/
const express = require('express');
const cors = require('cors');
const router = express.Router();

/********************************/
/*** Import connexion à la BDD*/
let db = require('./db.config');

/********************************/
/*** Initialisation de API */
const app = express();

/*** Middelware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


/********************************/
/*** Import des modules de routage */
const user_router = require('./routes/users');
const produit_router = require('./routes/produits');
const produit_categorie_router = require('./routes/produit_categorie');



/********************************/
/*** Mise en place du routage */
app.use('/users', user_router);
app.use('/produits', produit_router);
app.use('/produit_categorie', produit_categorie_router);


/********************************/
/*** Start serveur avec test DB */
db.sequelize.authenticate()
    .then(() => console.log('Database OK'))
    .then(() => {
        app.listen(8888, () => {
            console.log(`Serveur OK sur le port 8888 !`)
        })
    })
    .catch(err => console.log('Database error', err))


