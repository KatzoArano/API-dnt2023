/********************************/
/*** Import module nécessaires */

const { DataType } = require('sequelize');
const db = require('../db.config');


/********************************/
/*** Définition du modèle Use r*/
const User = db.define('User', {
    id: {
        type: DataType.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataType.STRING(),
        defaultValue: ''
    },
    prenom: {
        type: DataType.STRING(),
        defaultValue: ''
    },
    email: {
        type: DataType.STRING(),
        validate: {
            isEmail: true // validation de donnée
        }
    },
    password: {
        type: DataType.STRING(64),
        is: /^[0-9a-f]{64}$/i // contrainte
    },
    adresse: {
        type: DataType.STRING(),
        defaultValue: ''
    },
    ville: {
        type: DataType.STRING(),
        defaultValue: ''
    },
    cp: {
        type: DataType.INTEGER(),
        defaultValue: ''
    }
}, { paranoid: true })

/********************************/
/*** Export User */
module.exports = User