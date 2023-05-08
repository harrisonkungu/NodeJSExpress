module.exports = {
  HOST: "localhost",
  USER: "groundwa_apiuser",
  PASSWORD: "#Hope1214HmK",
  DB: "groundwa_api",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
