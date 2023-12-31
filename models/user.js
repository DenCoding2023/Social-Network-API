const {Schema} = require('mongoose');
const {model} = require('mongoose');

const Thought = require('./Thought');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: [true, 'Username is required256'],
        trim: true,
      },

      email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],

      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  const User = model('user', userSchema);
  
  module.exports = User;