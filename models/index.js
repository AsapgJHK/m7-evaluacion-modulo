const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  logging: false 
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



module.exports = db;



db.user = require("./user.model.js")(sequelize, DataTypes);
db.role = require("./role.model.js")(sequelize, DataTypes);




db.role.hasMany(db.user, {
  foreignKey: 'roleId', 
  as: 'usuarios'
});
db.user.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: 'rol'
});




module.exports = db;