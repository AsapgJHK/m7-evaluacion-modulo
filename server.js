const express = require("express");
const db = require("./models");

const app = express();
app.use(express.json()); 


db.sequelize.sync()
  .then(() => {
    console.log("Base de datos sincronizada.");
  })
  .catch((err) => {
    console.log("Fallo la sincronización: " + err.message);
  });


require("./routes/user.routes")(app);
require("./routes/role.routes")(app); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});