const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

function validMovie(movie) {
  const hasName = typeof movie.name == "string" && movie.name.trim() != "";
  const hasGenre = typeof movie.genre == "string" && movie.name.trim() != "";
}

router.get("/", (req, res) => {
  connection.getAll().then((movies) => {
    res.json(movies);
  });
});

router.get("/:id", (req, res) => {
  connection.getOne(req.params.id).then((movies) => {
    if (movies) {
      res.json(movies);
    } else {
      res.send("No such ID");
    }
  });
});

router.post("/", (req, res, next) => {
  if (validMovie(req, body)) {
    connection.create(req.body).then((movie) => {
      res.json(movie);
    });
  } else {
    next(new Error("Invalid movie"));
  }
});

module.exports = router;
