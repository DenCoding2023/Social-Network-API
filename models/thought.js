const {Schema} = require('mongoose');
const {model} = require('mongoose');

const Reaction = require('./reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatTimestamp(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false,
    }
);