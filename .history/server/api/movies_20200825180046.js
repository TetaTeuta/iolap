const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

module.exports = router;
