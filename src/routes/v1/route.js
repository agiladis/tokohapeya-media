const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');

router.use('/v1', userRouter);

module.exports = router;
