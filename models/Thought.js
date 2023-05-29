const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, min: 1, max: 280 },
    createdAt: { type: Date, }, // will need to use getter to format the timestamp query, set default to current
    username: { type: String, required: true },
    //reactions: {  } an array of nested docs created with the reactionSchema
});

const Thought = mongoose.model("Thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;