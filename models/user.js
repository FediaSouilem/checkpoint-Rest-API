const mongoose= require('mongoose');
const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,// must have name
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        required: true,
    }
})
module.exports = mongoose.model('person', userSchema)