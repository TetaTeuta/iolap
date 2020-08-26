const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

router.get("/:id", (req, res, next) => {
  connection.getOne(req.params.id).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("No such ID");
    }
  });
});

router.post("/", (req, res, next) => {
  connection.create(req.body).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("Something is missing");
    }
  });
});

router.put("/:id", (req, res, next) => {
  connection.update(req.params.id, req.body).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("Something is missing");
    }
  });
});

router.delete("/:id", (req, res) => {
  connection.delete(req.params.id).then(() => {
    res.json({
      delete: true
    });
  });
});

module.exports = router;
