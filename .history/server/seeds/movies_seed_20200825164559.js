const movies = require("../movies");

exports.seed = function(knex, Promise) {
  return knex("movies")
    .del()
    .then(function() {
      return knex("movies").insert(movies);
    });
};
