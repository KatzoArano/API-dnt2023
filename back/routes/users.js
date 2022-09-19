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

router.put('', userCtrl.addUser)

// router.patch('/:id', userCtrl.updateUser)

// router.post('/untrash/:id', userCtrl.untrashUser)

// router.delete('/trash/:id', userCtrl.trashUser)

router.delete('/:id', userCtrl.deleteUser)

module.exports = router