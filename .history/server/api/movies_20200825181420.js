const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "Hello"
  });
});
module.exports = router;
