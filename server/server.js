const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var animalSchema = new Schema({
	Name: String,
	Type: String,
  Age: String
}, {
	collection: 'animals'
});
var Animal = mongoose.model('Animal',animalSchema);
mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
var Animal = mongoose.model('Animal',animalSchema);
mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
app.get('/', function (req, res) {
  Animal.find({},function(err,animals){
    if(err) throw err;
    res.send(animals);
  })
})
