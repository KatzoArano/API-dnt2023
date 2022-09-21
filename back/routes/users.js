/********************************/
/*** Import modules */
const express = require('express')
const userCtrl = require('../controllers/user')
const User = require('../models/user');

/********************************/
/*** Récupération du moteur express */
let router = express.Router();

/********************************/
/*** Mise en place des différentes routes utilisateurs */
/**********************************/
/*** Routage de la ressource User */

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getUser)

router.post('/', userCtrl.addUser)

router.put('/:id', userCtrl.updateUser)

router.delete('/:id', userCtrl.deleteUser)

module.exports = router