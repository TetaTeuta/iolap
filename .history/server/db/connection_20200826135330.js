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
  create(movies) {
    return knex("movies").insert(movies, "*");
  },
  update(id, movies) {}
};
