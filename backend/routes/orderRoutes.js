const express = require("express");
const { createOrder, updateOrder, cancelOrder, getOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.put("/:id", protect, updateOrder);
router.delete("/:id", protect, cancelOrder);

module.exports = router;
