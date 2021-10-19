const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hey there, what do you wanna eat today?");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("the server to uber eats is running"));
