/********************************/
/*** Import module nécessaires */

const { DataType } = require('sequelize');
const db = require('../db.config');


/********************************/
/*** Définition du modèle Produit */
const Produit = db.define('Produit', {
    id: {
        type: DataType.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataType.STRING(),
        defaultValue: ''
    },
    description: {
        type: DataType.TEXT(),
        defaultValue: ''
    },
    prix: {
        type: DataType.FLOAT(),
        defaultValue: ''
    },
}, { paranoid: true })

/********************************/
/*** Export Produit */
module.exports = Produit