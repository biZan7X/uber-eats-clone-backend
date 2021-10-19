const express = require("express");
const router = express.Router();

const orders = [
  {
    name: "order1",
  },
  {
    name: "order2",
  },
];

router.get("/", (req, res) => {
  //TODO: fetch from the DB
  res.status(200).send(orders);
});

router.post("/", (req, res) => {
  //TODO: validation
  const newOrder = {
    name: req.body.name,
  };

  orders.push(newOrder);
  res.status(200).send(orders);
});

module.exports = router;
