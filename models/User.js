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
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
})

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

User.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await User.insertMany(
        [
          { username: "user01",
            email: "user01@email.com",
            thoughts: [],
            friends: []
          },
          { username: "user02",
          email: "user02@email.com",
          thoughts: [],
          friends: []
        },
        { username: "user03",
        email: "user03@email.com",
        thoughts: [],
        friends: []
      },
        ]
      );
      return console.log('Departments inserted', results);
    }
    return console.log('Already populated');
  })
  .catch(err => handleError(err));

module.exports = User;