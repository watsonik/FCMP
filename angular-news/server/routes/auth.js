const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');
const User = require('./../models/users');
const passport = require('./../middlewares/passport');

router.post('/register', (req, res, next) => {
  try {
    logger.info(`POST users/`);
    const newUser = new User();

    newUser.local.login = req.body.login;
    newUser.local.password = req.body.password;
    newUser.save(err => {
      if (err) {
        logger.error(`Registration failed failed`);
        throw new Error('Registration failed failed');
      }
      logger.info(`Registration successfully`);
      res.send('OK');
    });
  } catch (err) {
    next(err);
  }
});

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    res.send(req.user);
  }
);

router.get('/logout',
  (req, res) => {
    req.logout();
    res.send('OK');
  }
);

module.exports = router;
