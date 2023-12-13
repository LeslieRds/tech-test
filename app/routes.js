const express = require("express");

module.exports = () => {
  const app = new express.Router();

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.post("/api/update", function(req, res) {
    res.json({ message: "Données mises à jour avec succès" });
  });

  return app;
};
