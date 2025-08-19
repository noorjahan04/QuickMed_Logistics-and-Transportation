const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String }
}, { timestamps: true });

inventorySchema.methods.checkLowStock = function () {
  return this.quantity < 5;
};

module.exports = mongoose.model("Inventory", inventorySchema);
