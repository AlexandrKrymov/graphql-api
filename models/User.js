const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UserSchema = new Schema({
    name:       String,
    role:       String,
    email:      String,
    phone:      String,
    active:     Boolean,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);