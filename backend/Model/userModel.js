const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please Add Your Name']
        },
        username: {
            type: String,
            required: [true, 'Please Add Your Username']
        },
        email: {
            type: String,
            required: [true, 'Please Add Your Email']
        },
        password: {
            type: String
        }
    },
    {
        timestamp: true,
    }
)

module.exports = mongoose.model("User", userSchema);