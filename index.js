const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User'); //copies file and therefre executes it at start-up
//const PassPortConfig = require('./services/passport'); is replaced by below
require('./services/passport'); // copies the complete file inline to index.js

mongoose.connect(keys.mongoURI);

const app = express;

// const authRoutes = require('./routes/authRoutes'); // removed as part of refactoring
//authRoutes(app); // refactored to the code below
require('./routes/authRoutes')(app); // copies in function def and then invokes it

const PORT = process.env.PORT || 5000;
app.listen(PORT);
