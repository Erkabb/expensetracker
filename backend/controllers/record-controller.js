const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  // const data = await sql`SELECT * FROM records`;
  // console.log("records:", data);
  // res.status(200).json({ message: "records", user: data });
  try { 
    const data = await sql`SELECT * FROM records`;
    console.log("records:", data);
    res.status(200).json({ message: "records", user: data });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};
const recordInfo = async (req, res) => {
  // const data = await sql`SELECT * FROM records`;
  // console.log("records:", data);
  // res.status(200).json({ message: "records", user: data });
  try { 
    const [income, expense] = await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense});
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
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
const updateRecord = async (req, res) => {
  const { name, amount, transaction_type } = req.body;
  const data =
    await sql`UPDATE records SET name=${name}, amount=${amount}, transaction_type=${transaction_type}
  WHERE id=${id}`;
  res.status(201).json({ message: "update records" });
};
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  res.status(200).json({ message: "deleted", user: data });
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord, recordInfo };
