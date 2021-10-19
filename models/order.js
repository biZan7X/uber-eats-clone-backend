const mongoose = require("mongoose");
const Joi = require("joi");

const orderSchema = new mongoose.Schema({
  bill: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
  },
});

const Order = mongoose.model("Order", orderSchema);

const orderValidation = (order) => {
  const schema = Joi.object({
    bill: Joi.number().required(),
    items: Joi.array(),
  });

  return schema.validate(order);
};

module.exports.Order = Order;
module.exports.orderValidation = orderValidation;
