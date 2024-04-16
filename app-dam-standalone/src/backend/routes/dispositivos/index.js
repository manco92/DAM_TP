const express = require("express");
var pool = require("../../mysql-connector");

const routerDispositivo = express.Router();

routerDispositivo.get("/", function (req, res) {
  pool.query(`SELECT * from Dispositivos`, function (err, result, field) {
    if (err) {
      res.send(err).status(400);
      return;
    }
    console.log(result);
    res.send(result).status(200);
  });
});

routerDispositivo.get("/:id", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT * from Dispositivos WHERE dispositivoId = ${id} `,
    function (err, result, field) {
      if (err) {
        res.send(err).status(400);
        return;
      }
      console.log(result);
      res.send({ dispositivo: id }).status(200);
    }
  );
});

module.exports = routerDispositivo;
