const express = require('express');
const userRouter = express.Router();
const multer = require('multer')();
const { Register } = require('../../controllers/user.controller');
const {
  ValidateCreateUserRequest,
} = require('../../middleware/validationRequest');

userRouter.post('/register', Register);

module.exports = userRouter;
