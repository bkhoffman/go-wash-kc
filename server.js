const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
// added for passport---remove this comment if working
const bodyParser = require('body-parser');

const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();
// added for passport---remove this comment if working
// const env = require('dotenv').load();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

// for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// changed 'TBD' to 'keyboard cat' per passport docs --remove if working
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);
require('./config/passport');

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
        db.sequelize.sync({ force: true }).then(() => {
            console.log(`🌎 ==> API server now on port ${PORT}!`); // eslint-disable-line no-console
            app.emit('appStarted');
        });
    })
    .catch(console.error); // eslint-disable-line no-console

module.exports = app;