const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bidSchema = new Schema({
    content: {
        type: Number,
        required: true,
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
    description: {
        type: String
    },
    posted: {
        type: Date,
    },
    bids: [bidSchema]
}, {
    timestamps: true 
})

module.exports = mongoose.model('Item', itemSchema)