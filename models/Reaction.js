const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    //reactionId: { type: Id, required: true, unique: true, trim: true },
    reactionBody: { type: String, required: true },
    createdAt: {type: Date, /* set default to current timestamp & use getter method to format the timestamp on query */ }
});

const Reaction = mongoose.model("Reaction", reactionSchema);

const handleError = (err) => console.error(err);

module.exports = Reaction;