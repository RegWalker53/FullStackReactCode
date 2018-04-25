const mongoose = require('mongoose');
// const Schema = mongoose.Schema; refactors to below using destucturing
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: string
});

mongoose.model('users', userSchema);
