const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');
const passport = require('passport');

const userService = new UserService();

router.get('/',
    (req, res) => {
        res.render('home', {user: req.user});
    });

router.get('/login',
    (req, res) => {
        res.render('login');
    });

router.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    (req, res) => {
        res.redirect('/');
    });

router.get('/login/fb',
    passport.authenticate('facebook'));

router.get('/return',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
    });

router.get('/register',
    (req, res) => {
        res.render('register');
    });

router.post('/register',
    (req, res) => {
        userService.add(req.body);
        res.redirect('/login');
    });

router.get('/logout',
    (req, res) => {
        req.logout();
        res.redirect('/');
    });

router.get('/updatenews',
    (req, res) => {
        res.render('updatenews');
    });

router.get('/addnews',
    (req, res) => {
        res.render('addnews');
    });

module.exports = router;
