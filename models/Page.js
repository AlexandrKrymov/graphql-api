const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const PageSchema = new Schema({
    author:     String,
    title:      String,
    url:        String,
    content:    String,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Page', PageSchema);