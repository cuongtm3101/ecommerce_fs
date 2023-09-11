const express = require("express");
const db = require("../utils/db");
const { filterByCategory } = require("../middlewares/product.middlewares");

//
const router = express.Router();

router.get("/", filterByCategory, async (req, res) => {
  try {
    let result = await db.execute("SELECT * FROM product");
    let [rows] = result;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

module.exports = router;
