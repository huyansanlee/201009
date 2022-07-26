const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("./config/multer_config");
const upload = multer(multerConfig.config).single(multerConfig.keyUpload); // multerConfig.keyUpload คีย์สำหรับอัปโหลด
const db = require("./models");
const product = require("./models/product");

router.get("/product", async (req, res) => {
  try {
    const result = await db.Product.findAll({
      order: [["id", "DESC"]],
      // attributes:['name','image']
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;