const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');
const passport = require('passport');

const userService = new UserService();

router.get('/',
    function (req, res) {
        res.render('home', {user: req.user});
    });

router.get('/login',
    function (req, res) {
        res.render('login');
    });

router.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

router.get('/register',
    function (req, res) {
        res.render('register');
    });

router.post('/register',
    function (req, res) {
        userService.add(req.body);
        res.redirect('/login');
    });

router.get('/logout',
    function (req, res) {
        req.logout();
        res.redirect('/');
    });

router.get('/updatenews',
    function (req, res) {
        res.render('updatenews');
    });

router.get('/addnews',
    function (req, res) {
        res.render('addnews');
    });

module.exports = router;
