const express = require("express");
const app = express(); //initialize the server
const requiredPort = 5000; //change to a vacant port if 5000 is in use

const configuredRoutes = require("./routes/routes"); //require the routes created for the API

app.get("/", (req, res) => {
    //when base path is loaded, redirect to csv
    res.redirect("/csv/get");
});

app.use(configuredRoutes); //add the configured routes on the router to the express server

app.get("*", (req, res) => {
    //404 route
    //api endpoint not found
    res.status(404).json({
        message: "route not found"
    });
})

app.listen(requiredPort, () => {
    //server successfully started listening
    console.log(`DMV Server Successfully Started At Port ${requiredPort}`);
});