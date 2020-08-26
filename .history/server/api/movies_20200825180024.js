const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  queries.getAll().then((movies) => {
    res.json(movies);
  });
});

module.exports = router;
