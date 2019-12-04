const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ReviewSchema = new Schema({
    author:     String,
    project:    Number,
    content:    String,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);