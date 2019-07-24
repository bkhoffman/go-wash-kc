const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const passportRoutes = ('./config/passportRoutes');
const corsOptions = require('./config/cors.js');

// added from redux example
// const cookieParser = require('cookie-parser');
// const config = require('../src/config');
// const http = require('http');
// const SocketIo = require('socket.io');

const PORT = process.env.PORT || 3001;
const app = express();
// added for passport
// const env = require('dotenv').load();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

// for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// changed 'TBD' to 'jd is a rockstar' per passport docs 
app.use(session({
    secret: 'jd is a rockstar',
    // store: new SequelizeStore({ db: app.locals.sequelize }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });
}

const server = app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Dynamically force schema refresh only for 'test'
const FORCE_SCHEMA = process.env.NODE_ENV === 'test';

db.sequelize
    .authenticate()
    .then(() => {
        // change force to ({ force: FORCE_SCHEMA}) to prevent reset of MySQL database
        db.sequelize.sync({ force: FORCE_SCHEMA }).then(() => {
            console.log(`🌎 ==> API server now on port ${PORT}!`); // eslint-disable-line no-console
            app.emit('appStarted');
        });
    })
    .catch(console.error); // eslint-disable-line no-console

module.exports = app;