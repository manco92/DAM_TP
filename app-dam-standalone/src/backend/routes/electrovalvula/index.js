const express = require("express");
var pool = require("../../mysql-connector");

const routerElectrovalvula = express.Router();

routerElectrovalvula.get("/:id", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT m.* from Riegoes m where m.dispositivoId = ${id} and m.fecha = (SELECT MAX(fecha) from Riegoes where dispositivoId = ${id})`,
    function (err, result, field) {
      if (err) {
        res.send(err).status(400);
        return;
      }
      console.log(result);
      res.send(result[0]).status(200);
    }
  );
});

routerElectrovalvula.get("/:id/todas", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT * from Riegoes where dispositivoId = ${id}`,
    function (err, result, field) {
      if (err) {
        res.send(err).status(400);
        return;
      }
      console.log(result);
      res.send(result).status(200);
    }
  );
});

module.exports = routerElectrovalvula;
