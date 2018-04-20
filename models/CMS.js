const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CmsSchema object
// This is similar to a Sequelize model
const CmsSchema = new Schema({
    employees: [
        {
            _id: { type: Schema.ObjectId, auto: true },
            caption:  { type: String },
            title:    { type: String },
            img:      { type: String },
            link:     { type: String },
            name: { type: String, require: true }
        }
    ],
    images: [
        {
            _id: { type: Schema.ObjectId, auto: true },
            title:    { type: String },
            caption:  { type: String },
            img:      { type: String }
        }
    ],
    socialMedia: [
        {
            _id: { type: Schema.ObjectId, auto: true },
            title:    { type: String },
            img:      { type: String },
            link:     { type: String }
        }
    ],
    name: { type: String, require: true },
    background_img:      { type: String },
    address:{
        address1:   { type: String, required: true },
        city:       { type: String, require: true },
        state:      { type: String, require: true },
        zipcode:    { type: String, require: true }
    },
    contact: [
        {
            _id: { type: Schema.ObjectId, auto: true },
            phone: {type: String, require: true}
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
const Cms = mongoose.model('Cms', CmsSchema);

// Export the Property model
module.exports = Cms;
