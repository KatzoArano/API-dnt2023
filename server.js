const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
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
    swaggerDefinition: {
        info: {
            title: 'Doc API',
            version: '1.0.0'
        }
    },
    apis: ['server.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

/********************************/
/*** Middelware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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


