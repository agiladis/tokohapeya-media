const express = require('express');
const userRouter = express.Router();
const { Insert } = require('../../controllers/user.controller');
const {
  ValidateCreateUserRequest,
} = require('../../middleware/validationRequest');

userRouter.post('/', ValidateCreateUserRequest, Insert);

module.exports = userRouter;
