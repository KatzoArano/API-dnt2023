const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
/*** Mise en place du routage */

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
app.get('/users', (req, res) => {
    res.send([
        {
            id: 1,
            nom: 'ARANO',
            prenom: 'Orkatz'
        }
    ])
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


