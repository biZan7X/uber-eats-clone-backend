const express = require("express");
const app = express();
const mongoose = require("mongoose");

const order = require("./routes/order");

app.use(express.json());

mongoose
  .connect("mongodb://localhost/uber-eats")
  .then(() => console.log("the DB is connected"))
  .catch((err) =>
    console.log(
      "Oops! something went wrong while trying to connect to the DB:",
      err
    )
  );

app.use("/api/orders", order);

app.get("/", (req, res) => {
  res.status(200).send("hey there, what do you wanna eat today?");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("the server to uber eats is running"));
