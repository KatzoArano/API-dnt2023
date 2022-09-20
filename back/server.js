/********************************/
/*** Import modules*/
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();

/********************************/
/*** Import connexion à la BDD*/
let db = require('./db.config');

/********************************/
/*** Initialisation de API */
const app = express();

/********************************/
/*** Mise en place Swagger options */
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['server.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

/********************************/
/*** Middelware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


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
/*** SWAGGER */
/**
 * @openapi
 * /users:
 *   get:
 *     responses:
 *       200:
 *         description: Retourne liste utilisateurs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       nom:
 *                         type: string
 *                         description: Nom de utilisateur.
 *                         example: TEST
 */

/********************************/
/*** Mise en place routage*/
router.get('/users', (req, res) => {
    res.send([
        {
            id: 1,
            nom: 'TEST',
            prenom: 'Test',
            email: 'test@wanadoo.fr',
            password: 'test',
            adresse: 'adresse de test',
            ville: 'BAYONNE',
            cp: '64100'
        }
    ])
})


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


