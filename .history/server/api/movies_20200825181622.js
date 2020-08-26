const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

router.get("/:id", (req, res) => {
  connection.getOne(req.params.id).then((movies) => {
    res.json(movies);
  });
});
module.exports = router;
