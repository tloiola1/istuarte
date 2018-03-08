const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CmsSchema object
// This is similar to a Sequelize model
const CmsSchema = new Schema({
    employees: [
        {
            caption:  { type: String },
            socialMedia: [
                {
                    title:    { type: String },
                    img:      { type: String },
                    link:     { type: String }
                }
            ],
            name: {
                firstName:  { type: String, require: true },
                lastName:   { type: String, require: true }
            },
            email:      { type: String, require: true },
            phone:      { type: String, require: true }
        }
    ],
    images: [
        {
            title:    { type: String },
            caption:  { type: String },
            img:      { type: String }
        }
    ],
    socialMedia: [
        {
            title:    { type: String },
            img:      { type: String },
            link:     { type: String }
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
const Cms = mongoose.model("Cms", CmsSchema);

// Export the Property model
module.exports = Cms;
