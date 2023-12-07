//Importing Express Router
const express = require("express");
const app = express();

//Importing Router from ./routes/routes.js
const Router = require('./routes/routes');
app.use('/api', Router);

//Defining the ejs setting ('view engine', 'ejs')
// TODO --------------------------
app.set("view engine", "ejs");
// TODO --------------------------

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});



module.exports = app;