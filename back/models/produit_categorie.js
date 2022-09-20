/********************************/
/*** Import module nécessaires */

const { DataTypes } = require('sequelize');
const db = require('../db.config');


/********************************/
/*** Définition du modèle Use r*/
module.exports = (sequelize) => {
    const Produit_Categorie = sequelize.define('Produit_Categorie', {
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
    return Produit_Categorie;
}