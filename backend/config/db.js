// const pg = require("pg");
// const { Client } = require("pg");
const postgres = require("postgres");
require("dotenv").config();
const { ENDPOINT_ID } = process.env;
// const client = new Client({
//     user: "expense_db_owner",
//         passowrd: "cdfeMV3y5Fog",
//     host: "ep-fancy-art-a5cnci4e.us-east-2.aws.neon.tech",
//         port:"5432",
//     database: "expense_db"
// });

// const connectDB = async () => {
//     // await client.connect();
//     // console.log("Connected database");
//     try {
//          await client.connect();
//     console.log("Connected database");
//     } catch (error) {
//         console.log("db error", error);
//     }
// };

const sql = postgres({
    host: "ep-fancy-art-a5cnci4e.us-east-2.aws.neon.tech",
    database: "expense_db",
    passowrd: "cdfeMV3y5Fog",
username:"expense_db_owner",
    port:"5432",
    ssl: "require",
    connection: {
    options: `project=${ENDPOINT_ID}`,
}
})

module.exports = sql;
