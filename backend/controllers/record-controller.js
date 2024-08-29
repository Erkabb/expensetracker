const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("records:", data);
  res.status(200).json({ message: "records", user: data });
};
const createRecord = async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;
  const data =
    await sql`insert into records(name, amount, transaction_type, description) 
    values
    (${name}, 
    ${amount}, 
    ${transaction_type}, 
    ${description});`;
  console.log("data", data);
  res.status(201).json({ message: "new records", user: data });
};
const updateRecord = () => {};
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  res.status(200).json({ message: "deleted", user: data });
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord };
