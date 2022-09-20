/********************************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize');

/********************************/
/*** Connexion à la BDD */
let sequelize = new Sequelize('hemengo_distrib', 'root', 'root', { dialect: 'mysql', host: 'localhost' });

// sequelize.sync({ force: true });
// alter true : relation (voir vidéos bonus)

const db = {};
db.sequelize = sequelize
db.User = require('./models/user')(sequelize)
module.exports = db;

