const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ name: String, quantity: Number, price: Number }],
  status: { type: String, enum: ["pending", "confirmed", "delivered", "cancelled"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
