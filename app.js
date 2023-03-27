//jshint esversion:6
const express = require("express");
const expressLayouts = require("express-ejs-layouts");


const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");

const routes = require('./server/routes/recipeRoutes.js');
app.js("/", routes);

app.listen(port, function(){
    console.log(`Server is running successfully on port ${port}`);
})

