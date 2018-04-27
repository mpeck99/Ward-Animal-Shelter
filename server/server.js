const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var nodemailer = require('nodemailer');
var router = express.Router();
mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
var featuredAnimalSchema = new Schema({
	Name: String,
	Type: String,
  Age: String,
	img: String,
	gender:String
}, {
	collection: 'featured-animals'
});
var animalSchema = new Schema({
	Name: String,
	Type: String,
  Age: String,
	img: String,
	gender:String
}, {
	collection: 'animals'
});
var Animal = mongoose.model('Animal',animalSchema);
var FeaturedAnimal = mongoose.model('FeaturedAnimal',featuredAnimalSchema);
mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
app.get('/', function (req, res) {
  FeaturedAnimal.find({},function(err,animals){
    if(err) throw err;
    res.send(animals);
  })
})
app.get('/animals',function(req,res){
	Animal.find({},function(err,animals){
    if(err) throw err;
    res.send(animals);
  })
});
app.get('/cats',function(req,res){
	Animal.find({"type":"Cat"},function(err, cats){
		if(err) throw err;
		res.send(cats);
	});
});
app.get('/dogs',function(req,res){
	Animal.find({"type":"Dog"},function(err, dogs){
		if(err) throw err;
		res.send(dogs);
	});
});
app.get('/other',function(req,res){
	Animal.find({"type":"Other"},function(err, dogs){
		if(err) throw err;
		res.send(dogs);
	});
})
app.get('/send',function(req,res){
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth:{
	    user:"wardanimalshelter@gmail.com",
	    pass:"animalshelter"
	  }
	});
	var mailOptions={
	  from: 'wardanimalshelter@gmail.com',
	  to:"wardanimalshelter@gmail.com",
	  subject:req.query.email,
	  text:req.query.msg
	}
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
			console.log(req.query.email);
			res.redirect('/sent');
	  }
	});
});
app.get('/sent',function(req,res){
	console.log('sent');
})
