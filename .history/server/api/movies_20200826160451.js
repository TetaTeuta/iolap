const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

router.get("/:id", isValidId, (req, res, next) => {
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

router.put("/:id", isValidId, (req, res, next) => {
  connection.update(req.params.id, req.body).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("Something is missing");
    }
  });
});

router.delete("/:id", isValidId, (req, res, next) => {
  connection.delete(req.params.id).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("Movie removed");
    }
  });
});

module.exports = router;
