const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add Your Name']
    }
    },
    {
        timestamp: true,
    }
)

module.exports = mongoose.model("User", userSchema);