const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("data", data);
  res.status(200).json({ message: "success", user: data });
};

const createUser = async (req, res) => {
  const { email, name, password, profile_image } = req.body;
  const data =
    await sql`insert into users(email, name , password, profile_image) 
values
(${email}, 
${name}, 
${password}, 
${profile_image});`;
  console.log("data", data);
  res.status(201).json({ message: "new user", user: data });
};

const updateUser = () => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM users WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete success", user: data });
};
module.exports = { getAllUser, createUser, updateUser, deleteUser };
