const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new AdminSchema object
// This is similar to a Sequelize model
const AdminSchema = new Schema({

    name: {
        firstName:  { type: String, require: true },
        lastName:   { type: String, require: true }
    },
    email:      { type: String, require: true },
    password:    { type: String, require: true },
    phone:      { type: String, require: true },
    secureQuestion: [
        {
            question:   { type: String, require: true },
            answer:     { type: String, require: true }
        }
    ],
});

// This creates our model from the above schema, using mongoose's model method
const Admin = mongoose.model("Admin", AdminSchema);

// Export the Property model
module.exports = Admin;
