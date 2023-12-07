// import the pets array from data.js
const pets = require("../databaseInfo/data");

//Importing Express Router
const express = require("express");
const Router = express.Router();

//Defining Route Variable
const hello = "/v1";
const petData = "/v1/pets";
const ownerQuery = "/v1/pets/owner-query";
const petName = "/v1/pets/:name";

// GET - / - returns homepage
Router.get("", (req, res) => {
  // serve up the public folder as static index.html file
  res.send("This is the Home Page");
});

// hello world route
Router.get(`${hello}`, (req, res) => {
  res.render("index", { text: "This is a Render" });
  // res.send("Hello World!");
});

// get all pets from the database
// Router.get(`${petData}`, (req, res) => {
Router.get(`${petData}`, (req, res) => {
  // send the pets array as a response
  //! ---Use the Res object to Send the 'pets' array
  //! to the requestor.
  res.send(pets);
});

// get pet by owner with query string
//! ---Changed the path argument to include a param of
//! ':owner'
Router.get(`${ownerQuery}`, (req, res) => {
  // get the owner from the request
  //! 1 ---Defining const variable to work with following
  //! const variable's definition function.
  //! 2 ---Then pulling the Req object and pulling
  //! the owner parameter from the requested URL param.
  const owner = req.query.owner;
  // TODO ------------------------------------------------
  // const owner = myString.toLowerCase(req.query.owner);
  // TODO ------------------------------------------------

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);
  // TODO ----------------------------------------------------------------------
  // const pet = pets.find((pet) => myString.toLowerCase(pet.owner) === owner);
  // TODO ----------------------------------------------------------------------

  // send the pet as a response
  //! 1 ---Using the Response object to Send the pet
  //! variable containing the filtered pet by utilizing
  //! the recently defined 'pet' variable in the strict
  //! comparison function.
  res.send(pet);
});

Router.param("name", (req, res, next, name) => {
  res.render("message", { text: "Harry Potter owes us a new broom!" });
});

// GET, PUT, DELETE pet details based on name and API Method
Router.route(`${petName}`)
  .get((req, res) => {
    // get the name from the request
    const name = req.params.name;
    // find the pet in the pets array
    const pet = pets.find((pet) => pet.name === name);
    // send the pet as a response
    res.send(pet);
  })
  .put((rep, res) => {
    res.send(
      console.log(`Updating Pet Record with name of ${req.params.name}`)
    );
  })
  .delete((req, res) => {
    res.send(
      console.log(`Deleting Pet Record with name of ${req.params.name}`)
    );
  });

module.exports = Router;
