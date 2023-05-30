const { Schema, model, mongoose } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId, auto: true },
    reactionBody: { type: String, required: true },
    /* set default to current timestamp & use getter method to format the timestamp on query */
    createdAt: { type: Date, default: Date.now }
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now }, // will need to use getter to format the timestamp query, set default to current
    username: { type: String, required: true },
    //reactions: {  } an array of nested docs created with the reactionSchema
    reactions: [reactionSchema]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
})

const Thought = mongoose.model("thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;