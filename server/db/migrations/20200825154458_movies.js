exports.up = (knex, Promise) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table.string("genre").notNullable();
    table.integer("rating");
    table.boolean("explicit");
  });
};
exports.down = (knex, Promise) => {
  return knex.schema.dropTable("movies");
};
