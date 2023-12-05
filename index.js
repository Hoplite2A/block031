// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
     
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    //! ---Use the Res object to Send the 'pets' array 
    //! to the requestor.
    res.send(pets);
});

// get pet by owner with query string
//! ---Changed the path argument to include a param of 
//! ':owner'
app.get('/api/v1/pets/:owner', (req, res) => {
    // get the owner from the request
    //! 1 ---Defining const variable to work with following
    //! const variable's definition function. 
    //! 2 ---Then pulling the Req object and pulling 
    //! the owner parameter from the requested URL param.
    const owner = req.params.owner;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    //! 1 ---Using the Response object to Send the pet
    //! variable containing the filtered pet by utilizing
    //! the recently defined 'pet' variable in the strict 
    //! comparison function.
    res.send(pet);
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    //! 1 ---Defining const variable to work with following
    //! const variable's definition function. 
    //! 2 ---Then pulling the Req object and pulling 
    //! the name parameter from the requested URL param.
    const name = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    //! 1 ---Using the Response object to Send the pet
    //! variable containing the filtered pet by utilizing
    //! the recently defined 'name' variable in the strict 
    //! comparison function.
    res.send(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;