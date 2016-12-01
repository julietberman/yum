var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var ObjectId = Schema.ObjectId

var MenuSchema = new mongoose.Schema({
   title: String
 })

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items:  [{type: ObjectId, ref: "MenuSchema"}]
});

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("MenuItem", MenuSchema)

module.exports = mongoose;
