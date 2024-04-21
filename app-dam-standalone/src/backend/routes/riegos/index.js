const express = require("express");
var pool = require("../../mysql-connector");

const routerRiego = express.Router();

routerRiego.get("/:id", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT m.* from Mediciones m where m.dispositivoId = ${id} and m.fecha = (SELECT MAX(fecha) from Mediciones where dispositivoId = ${id})`,
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

routerRiego.get("/:id/todas", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT * from Log_Riegos where electrovalvulaId = ${id}`,
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

routerRiego.post("/agregar", function (req, res) {
  pool.query(
    "Insert into Log_Riegos (fecha,apertura,electrovalvulaId) values (?,?,?)",
    [
      new Date().toISOString().slice(0, 19).replace("T", " "),
      req.body.apertura,
      req.body.id,
    ],
    function (err, result, field) {
      if (err) {
        res.send(err).status(400);
        return;
      }
      console.log(result);
      res.send(req.body.apertura).status(200);
    }
  );
});

module.exports = routerRiego;
