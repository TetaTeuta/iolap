const environment = process.env.NODE_ENV || "development";
const config = require("../../server/knexfile");
const enviromentConfig = config[enviroment];
const knex = require("knex");

module.exports = require("knex")(config);
