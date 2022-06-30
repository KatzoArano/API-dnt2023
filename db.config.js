/********************************/
/*** Import des modules nécessaires */

const { Sequelize } = require('sequelize');

/********************************/
/*** Connexion à la BDD */
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }

);

/********************************/
/*** Syncro des modèles */

module.exports = sequelize

