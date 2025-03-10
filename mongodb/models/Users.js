const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);