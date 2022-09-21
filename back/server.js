/********************************/
/*** Import modules*/
const express = require('express');
const cors = require('cors');
const router = express.Router();
require("dotenv").config();

/********************************/
/*** Import connexion à la BDD*/
let db = require('./db.config');

/********************************/
/*** Initialisation de API */
const app = express();

/*** Middelware */
app.use(cors());
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}))
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
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Serveur OK! ${process.env.SERVER_PORT}`)
        })
    })
    .catch(err => console.log('Database error', err))


