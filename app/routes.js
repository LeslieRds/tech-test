import express from 'express';
import generateStockData from '../api';

const express = require("express");

module.exports = () => {
  const app = new express.Router();

  app.get("/stocks", function(req, res) {
    const data = generateStockData();
    res.json(data);
  });

  app.post("/api/update", function(req, res) {
    res.json({ message: "Données mises à jour avec succès" });
  });

  return app;
};
