const db = require("../models");
const User = db.user;
const Role = db.role;


exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error al crear usuario." });
  }
};


exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Role, as: 'rol', attributes: ['nombre'] }]
    });
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error al obtener usuarios." });
  }
};

exports.delete = async (req, res) => {
  const t = await db.sequelize.transaction(); 
  try {
    const id = req.params.id;

    const num = await User.destroy({
      where: { id: id }
    }, { transaction: t });

    if (num == 1) {
      await t.commit(); 
      res.send({ message: "Usuario eliminado con éxito." });
    } else {
      await t.rollback(); 
      res.status(404).send({ message: `No se pudo encontrar el usuario con id=${id}.` });
    }
  } catch (error) {
    await t.rollback();
    res.status(500).send({ message: error.message || "Error al eliminar el usuario." });
  }
};