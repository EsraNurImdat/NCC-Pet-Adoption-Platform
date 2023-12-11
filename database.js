const {Pool} = require("pg")

const pool = new Pool(
    {
    user: "postgres",
    password: "Zaegt21.",
    host: "localhost",
    database: "animals",
    port: 5432
}
)

module.exports = pool