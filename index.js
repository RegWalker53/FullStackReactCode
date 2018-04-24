const express = require('express');
//const PassPortConfig = require('./services/passport'); is replaced by below
require('./services/passport'); // copied the complete file inline to index.js

// const authRoutes = require('./routes/authRoutes'); // removes a part of refactoring

const app = express;

//authRoutes(app); // refactored using
require('./routes/authRoutes')(app); // copies in function def and then invokes it

const PORT = process.env.PORT || 5000;
app.listen(PORT);
