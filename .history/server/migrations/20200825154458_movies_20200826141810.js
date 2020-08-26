exports.up = (knex, Promise) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table
      .text("name")
      .notNullable()
      .unique();
    table.text("genre").notNullable();
    table.float("rating");
    table.boolean("explicit");
  });
};
exports.down = (knex, Promise) => {
  return knex.schema.dropTable("movies");
};
