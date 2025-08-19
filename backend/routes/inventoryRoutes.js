const express = require("express");
const { addItem, getItems, updateItem, deleteItem } = require("../controllers/inventoryController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, addItem);
router.get("/", protect, getItems);
router.put("/:id", protect, updateItem);
router.delete("/:id", protect, deleteItem);

module.exports = router;
