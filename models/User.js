const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({

    name: {
        firstName:  { type: String, require: true },
        lastName:   { type: String, require: true }
    },
    email:      { type: String, require: true },
    password:   { type: String, require: true },
    phone:      { type: String, require: true },
    profileImg: { type: String },
    secureQuestion: [
        {
            question:   { type: String, require: true },
            answer:     { type: String, require: true }
        }
    ],
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the Property model
module.exports = User;
