const express = require("express");
var pool = require("../../mysql-connector");

const routerMedicion = express.Router();

routerMedicion.get("/:id", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT m.*, COALESCE(l.apertura, FALSE) AS apertura
    FROM Mediciones m
    LEFT JOIN (
        SELECT m.electrovalvulaId, m.apertura
        FROM Log_Riegos m 
        JOIN (
            SELECT electrovalvulaId, MAX(fecha) AS max_fecha
            FROM Log_Riegos 
            GROUP BY electrovalvulaId
        ) AS max_log
        ON m.electrovalvulaId = max_log.electrovalvulaId 
        AND m.fecha = max_log.max_fecha
    ) AS l ON m.dispositivoId = l.electrovalvulaId
    WHERE m.dispositivoId = ${id}`,
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

routerMedicion.get("/:id/todas", function (req, res) {
  const id = req.params.id;
  pool.query(
    `SELECT * from Mediciones where dispositivoId = ${id}`,
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

module.exports = routerMedicion;
