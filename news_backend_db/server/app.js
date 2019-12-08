const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
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
    (usernamewww, passwordwww, cb) => {
        userService.getByUsername(usernamewww)
            .then(user => {
                if (!user) {
                    return cb(null, false);
                }
                if (user.password !== passwordwww) {
                    return cb(null, false);
                }

                return cb(null, user);
            })
            .catch(err => cb(err));
    })
);

passport.serializeUser(async function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(async function (obj, cb) {
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
