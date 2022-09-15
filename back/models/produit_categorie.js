/********************************/
/*** Import module nécessaires */

const { DataTypes } = require('sequelize');
const db = require('../db.config');


/********************************/
/*** Définition du modèle Use r*/
const Produit_Categorie = db.define('Produit_Categorie', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(),
        defaultValue: ''
    },
}, { paranoid: true });


/********************************/
/*** Export User */
module.exports = Produit_Categorie