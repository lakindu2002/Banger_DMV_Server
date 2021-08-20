const express = require("express"); //load the express module.
const app = express(); //initialize the server
const requiredPort = 5000; //change to a vacant port if 5000 is in use


app.get("/", (req, res) => {
    //when base path is loaded, redirect to csv
    res.redirect("/csv");
});

app.listen(requiredPort, () => {
    //server successfully started listening
    console.log(`DMV Server Successfully Started At Port ${requiredPort}`);
});