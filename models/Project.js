const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ProjectSchema = new Schema({
    author:     String,
    title:      String,
    content:    String,
    url:        String,
    link:       String,
    category:   Number,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);