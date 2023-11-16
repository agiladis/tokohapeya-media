const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');

router.use('/v1/users', userRouter);

module.exports = router;
