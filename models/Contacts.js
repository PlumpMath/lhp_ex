var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {type: String, required: true, unique: true},
  email: String
});

var Contact = mongoose.model('contact', ContactSchema);


module.exports = Contact;
