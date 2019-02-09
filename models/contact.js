let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "fav"
});

module.exports = mongoose.model('fav', contactSchema);