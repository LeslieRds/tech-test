const express = require("express");
const generateStockData = require('../api');

module.exports = () => {
  const app = new express.Router();

  // Route pour obtenir les données des stocks
  app.get("/stocks", function(req, res) {
    const data = generateStockData();
    res.json(data.stocks);
  });

  app.post("/api/update", function(req, res) {
    res.json({ message: "Données mises à jour avec succès" });
  });

  return app;
};
