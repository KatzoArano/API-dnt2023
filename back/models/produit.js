/********************************/
/*** Import module nécessaires */

const { DataTypes } = require('sequelize');
const db = require('../db.config');

/********************************/
/*** Définition du modèle Use r*/
module.exports = (sequelize) => {
    const Produit = sequelize.define('Produit', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING(),
            defaultValue: ''
        },
        description: {
            type: DataTypes.TEXT(),
            defaultValue: ''
        },
        prix: {
            type: DataTypes.INTEGER(10),
        },
    }, { paranoid: true });
    return Produit;
}
