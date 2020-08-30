exports.up = (knex, Promise) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table.string("name").unique();
    table.string("genre").notNullable();
    table.integer("rating").notNullable();
    table.boolean("explicit");
  });
};
exports.down = (knex, Promise) => {
  return knex.schema.dropTable("movies");
};
