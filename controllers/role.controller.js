
const db = require("../models"); 
const Role = db.role; 


exports.create = async (req, res) => {
    try {
      
        if (!req.body.nombre) {
            return res.status(400).send({
                message: "El nombre del rol es obligatorio."
            });
        }

        
        const role = await Role.create({
            nombre: req.body.nombre
        });

        
        res.status(201).send(role);
    } catch (error) {
        
        res.status(500).send({
            message: error.message || "Error al crear el rol."
        });
    }
};


exports.findAll = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.send(roles);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error al recuperar los roles."
        });
    }
};


exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const role = await Role.findByPk(id);
        if (role) {
            res.send(role);
        } else {
            res.status(404).send({
                message: `No se encontró el Rol con id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error al recuperar el Rol con id=" + id
        });
    }
};


exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const [num] = await Role.update(req.body, {
            where: { id: id }
        });

        if (num === 1) {
            res.send({
                message: "Rol actualizado con éxito."
            });
        } else {
            res.status(404).send({
                message: `No se pudo actualizar el Rol con id=${id}. Tal vez el Rol no fue encontrado o req.body está vacío.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error al actualizar el Rol con id=" + id
        });
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Role.destroy({
            where: { id: id }
        });

        if (num === 1) {
            res.send({
                message: "Rol eliminado con éxito."
            });
        } else {
            res.status(404).send({
                message: `No se pudo eliminar el Rol con id=${id}. Tal vez el Rol no fue encontrado.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "No se pudo eliminar el Rol con id=" + id
        });
    }
};