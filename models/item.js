const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bidSchema = new Schema({
    Content: Number,
    Posted: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        },
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    posted: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        },
    },
    bids: [bidSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true 
})

module.exports = mongoose.model('Item', itemSchema)