const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { logger } = require("./middlewares/logger");
const userRouter = require("./routes/user-router");
const categoryRouter = require("./routes/categories");
const recordRouter = require("./routes/records");

dotenv.config();
const PORT = process.env.PORT; 
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/records", recordRouter);


// app.get("/users", (req, res) => {
//     res.status(200).json({
//         message: "succesfull"
//     });
// });
// app.post("/users", (req, res) => {
//     res.status(200).json({
//         message: "succesfull"
//     });
// });
// app.put("/users:id", (req, res) => {
//     res.status(200).json({
//         message: "succesfull"
//     });
// });
// app.delete("/users:id", (req, res) => {
//     res.status(200).json({
//         message: "succesfull"
//     });
// });

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})