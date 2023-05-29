const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, /* look into mongoose validaters for email */ },
    //thoughts: { "array of _id values referencing the tought model" },
    //friends: { "array of _id values referencing the user  model" },
});

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;