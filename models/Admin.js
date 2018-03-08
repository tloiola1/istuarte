const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const AdminSchema = new Schema({

  about_header: { type: String },
  about_caption: { type: String },
  profile_img: { type: String },

  contact_header: { type: String },

  connect_header: { type: String },
  connect_img: { type: String },
  connect_link: { type: String },
  connect_caption: { type: String },
  
  background_img: { type: String },
  fixedheader_color: { type: String },
  link_color: { type: String },
  backgroundimg_color: { type: String }
});

// This creates our model from the above schema, using mongoose's model method
const Admin = mongoose.model("Admin", AdminSchema);

// Export the Property model
module.exports = Admin;
