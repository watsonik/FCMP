const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bodyParser = require('body-parser');
const UserService = require('./services/userService');
const Logger = require('./logger');
const db = require('./db/db');

const newsRouter = require('./routes/news');
const authRouter = require('./routes/auth');

const logger = new Logger();
const userService = new UserService();
db.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

passport.use(new Strategy(
    (username, password, cb) => {
        userService.getByUsername(username)
            .then(user => {
                if (!user) {
                    return cb(null, false);
                }
                if (user.password !== password) {
                    return cb(null, false);
                }
                return cb(null, user);
            })
            .catch(err => cb(err));
    })
);

passport.use(new FacebookStrategy({
        clientID: 545000449412908,
        clientSecret: '65182fd039658cdcb0ff2f8fc5d23b40',
        callbackURL: '/return'
    },
    (accessToken, refreshToken, profile, cb) => cb(null, profile)));


passport.serializeUser(async (user, cb) => {
    cb(null, user);
});

passport.deserializeUser(async (obj, cb) => {
    cb(null, obj);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res) => {
    logger.logInfo(req.method, req.url);
    req.next();
});

app.use('/news', newsRouter);
app.use('/', authRouter);

app.listen(3000,
    () => console.log('application started on port 3000'));
