const sql = require("../config/db");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data =
    await sql`INSERT INTO users(email, name , password, profile_image) 
VALUES
(${email}, 
${name}, 
${hashedPassword}, 
'url');`;
  console.log("data", data);
  res.status(201).json({ message: "new user registered" });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await sql`select *from users where email=${email}`;

  if (user.length === 0) {
    res.status(404).json({ message: "not user found" });
  } else {
    const isChecked = bcrypt.compareSync(password, user[0].password);
  }
};

module.exports = { signup, signin };
