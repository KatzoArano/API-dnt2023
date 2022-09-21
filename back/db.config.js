/********************************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize');

/********************************/
/*** Connexion à la BDD */
let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { dialect: 'mysql', host: process.env.DB_HOST });
const db = {};
db.sequelize = sequelize
db.User = require('./models/user')(sequelize)
db.Produit = require('./models/produit')(sequelize)
db.Produit_Categorie = require('./models/produit_categorie')(sequelize)

// Relation choisie: Une Catégorie peut avoir plusieurs produits / Un Produit peut avoir qu'une categorie
// Suppression en cascade
db.Produit_Categorie.hasMany(db.Produit, { onDelete: 'cascade', onUpdate: 'CASCADE', hooks: true });
db.Produit.belongsTo(db.Produit_Categorie);


// sequelize.sync({ force: true });
// sequelize.sync({ alter: true })

module.exports = db;

