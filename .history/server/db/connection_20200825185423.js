const knex = require("./knex");

module.exports = {
  getAll() {
    return knex("movies");
  },
  getOne(id) {
    return knex("movies")
      .where("id", id)
      .first();
  },
  create(movie) {
    return knex("movies").insert(movie, "*");
  }
};