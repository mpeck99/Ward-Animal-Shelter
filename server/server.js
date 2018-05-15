const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = 8080;
const cors = require('cors');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const nodemailer = require('nodemailer');


mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
const featuredAnimalSchema = new Schema({
  Name: String,
  Type: String,
  Age: String,
  img: String,
  gender: String,
}, {
  collection: 'featured-animals',
});
const animalSchema = new Schema({
  Name: String,
  Type: String,
  Age: String,
  img: String,
  gender: String,
}, {
  collection: 'animals',
});
const Animal = mongoose.model('Animal', animalSchema);
const FeaturedAnimal = mongoose.model('FeaturedAnimal', featuredAnimalSchema);
mongoose.connect('mongodb://mpeck:root@ds243059.mlab.com:43059/animals');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('Server is running on Port: ', PORT);
});
app.get('/', (req, res) => {
  FeaturedAnimal.find({}, (err, animals) => {
    if (err) throw err;
    res.send(animals);
  });
});
app.get('/animals', (req, res) => {
  Animal.find({}, (err, animals) => {
    if (err) throw err;
    res.send(animals);
  });
});
app.get('/cats', (req, res) => {
  Animal.find({ type: 'Cat' }, (err, cats) => {
    if (err) throw err;
    res.send(cats);
  });
});
app.get('/dogs', (req, res) => {
  Animal.find({ type: 'Dog' }, (err, dogs) => {
    if (err) throw err;
    res.send(dogs);
  });
});
app.get('/other', (req, res) => {
  Animal.find({ type: 'Other' }, (err, dogs) => {
    if (err) throw err;
    res.send(dogs);
  });
});
app.get('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'wardanimalshelter@gmail.com', pass: 'animalshelter' },
  });
  const mailOptions = {
    from: 'wardanimalshelter@gmail.com',
    to: 'wardanimalshelter@gmail.com',
    subject: req.query.email,
    text: req.query.msg,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      console.log(req.query.email);
      res.redirect('/sent');
    }
  });
});
app.get('/sent', () => {
  /* eslint-disable no-console */
  console.log('sent');
});
