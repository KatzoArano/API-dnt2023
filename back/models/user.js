/********************************/
/*** Import module nécessaires */

const { DataTypes } = require('sequelize');
const db = require('../db.config');


/********************************/
/*** Définition du modèle Use r*/
module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING(),
            defaultValue: ''
        },
        prenom: {
            type: DataTypes.STRING(),
            defaultValue: ''
        },
        email: {
            type: DataTypes.STRING(),
            validate: {
                isEmail: true // validation de donnée
            }
        },
        password: {
            type: DataTypes.STRING(64),
            is: /^[0-9a-f]{64}$/i // contrainte
        },
        adresse: {
            type: DataTypes.STRING(),
            defaultValue: ''
        },
        ville: {
            type: DataTypes.STRING(),
            defaultValue: ''
        },
        cp: {
            type: DataTypes.STRING(),
            defaultValue: ''
        }
    }, { paranoid: true });
    return User;
}
