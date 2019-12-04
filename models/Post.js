const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const PostSchema = new Schema({
    author:     Number,
    title:      String,
    content:    String,
    url:        String,
    category:   Number,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);