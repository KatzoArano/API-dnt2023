/********************************/
/*** Import modules */
const express = require('express');
const User = require('../models/user');

/********************************/
/*** Récupération du moteur express */
let router = express.Router();

/********************************/
/*** Mise en place des différentes routes utilisateurs */
router.get('', (req, res) => {
    User.findAll()
        .then(users => res.json({ data: users }))
        .catch(err => res.status(500).json({ message: 'Erreur' }))
})

router.get('/:id', (req, res) => {
    // Obliger à transformer un chiffre en lettre, en int
    let userId = parseInt(req.params.id)

    //vérification si le champ id est présent et cohérent
    if (!userId) {
        return res.status(400).json({ message: 'Paramètre manquant' })
    }

    // Récupération de l'utilisateur
    User.findOne({ where: { id: userId }, raw: true })
        .then(user => {
            if ((user === null)) {
                return res.status(400).json({ message: 'Utilisateur non trouvé' })
            }
            // Utilisateur trouvé
            return res.json({ data: user })
        })
        .catch(err => res.status(500).json({ message: 'Erreur BDD', error: err }))


})
router.put('')
router.patch('/:id')
router.delete('/:id')