const express = require('express')
const cors = require('cors')
require('./db/config')
const Customer = require('./db/Customer')
const jwt = require('jsonwebtoken');
const tripController = require('./controller/tripController')

const app= express()

app.use(express.json())
app.use(cors())

app.post('/signup', async (req, res) => {
  try {
    let customer = new Customer(req.body);
    let result = await customer.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while signing up.' });
  }
});

app.post('/signin', async (req, res) => {
  try {  
    if (req.body.password && req.body.email) {
      const customer = await Customer.findOne({ email: req.body.email, password: req.body.password }).select('-password');
      if (customer) {
        const accessToken = jwt.sign({ userId: customer._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
          res.json({ userId: customer._id, email: customer.email, accessToken  });
      } else {
        res.status(404).send({ error: 'No user found.' });
      }
    } else {
      res.status(400).send({ error: 'Email and password are required.' });
    }
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while signing in.' });
  }
});

app.post('/create-trip', tripController.createTrip)

app.listen(6000,()=>{
    console.log('Server connected port 6000')
})