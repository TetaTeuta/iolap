const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

function validMovie(movie) {
  const hasName = typeof movie.name == "string" && movie.name.trim() != "";
  const hasGenre = typeof movie.genre == "string" && movie.genre.trim() != "";
  const hasRating =
    typeof movie.rating == "integer" && movie.rating.trim() != "";
  const hasExplicit =
    typeof movie.explicit == "boolean" && movie.explicit.trim() != "";
  return hasName && hasGenre && hasRating && hasExplicit;
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
  if (validMovie(req.body)) {
    connection.create(req.body).then((movies) => {
      res.json(movies);
    });
  } else {
    res.send("Something's missing");
  }
});

module.exports = router;
