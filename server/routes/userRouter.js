const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/:id", userController.getPDFText);

module.exports = router;
