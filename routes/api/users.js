const express = require('express');
const router = express.Router();

// User model
const User = require('../../models/User');

// @route POST api/users
// @desc Register new Users
// @access Public
router.post('/', (req, res) => {
  res.send('register');
});

module.exports = router;