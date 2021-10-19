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
  restaurantName: {
    type: String,
    required: true,
  },
  orderedAt: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

const orderValidation = (order) => {
  const schema = Joi.object({
    bill: Joi.number().required(),
    restaurantName: Joi.string().required(),
    orderedAt: Joi.string().required(),
    items: Joi.array(),
  });

  return schema.validate(order);
};

module.exports.Order = Order;
module.exports.orderValidation = orderValidation;
