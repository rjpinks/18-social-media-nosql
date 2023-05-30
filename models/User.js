const { Schema, model, mongoose } = require('mongoose');
const Thoughts = require("./Thought");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, /* look into mongoose validaters for email */ },
    //thoughts: { "array of _id values referencing the thought model" },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
    //friends: { "array of _id values referencing the user  model" },
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: this,
        },
      ],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
})

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;