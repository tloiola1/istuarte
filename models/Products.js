const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ProductsSchema object
// This is similar to a Sequelize model
const ProductsSchema = new Schema({

    name:       { type: String, require: true },
    description:{ type: String, require: true },
    quantity:   { type: String, require: true },
    price:      { type: String, require: true },
    img:        { type: String, require: true },
    link:       { type: String, require: true },
});

// This creates our model from the above schema, using mongoose's model method
const Products = mongoose.model("Products", ProductsSchema);

// Export the Property model
module.exports = Products;
