const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new AgendaSchema object
// This is similar to a Sequelize model
const AgendaSchema = new Schema({

    name: {
        firstName:  { type: String, require: true },
        lastName:   { type: String, require: true }
    },
    email:      { type: String, require: true },
    password:    { type: String, require: true },
    phone:      { type: String, require: true },
    date:       { type: Date, default: Date.now },
});

// This creates our model from the above schema, using mongoose's model method
const Agenda = mongoose.model("Agenda", AgendaSchema);

// Export the Property model
module.exports = Agenda;
