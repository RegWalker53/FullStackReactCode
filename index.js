const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./config/User'); //copies file and therefre executes it at start-up
//const PassPortConfig = require('./services/passport'); is replaced by below
require('./services/passport'); // copies the complete file inline to index.js

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require('./routes/authRoutes'); // removed as part of refactoring
//authRoutes(app); // refactored to the code below
require('./routes/authRoutes')(app); // copies in function def and then invokes it

const PORT = process.env.PORT || 5000;
app.listen(PORT);
