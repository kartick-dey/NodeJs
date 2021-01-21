const express = require('express');
const userController = require('../controllers/index');
const validateBody = require("../middleware/validate-body");
const validateBodyModel = require("../validate-body-model/index");

const router = express.Router();

router.get("/user", userController.getUser);
router.post("/user", validateBody(validateBodyModel), userController.createUser);

module.exports = router;