const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home")
});


app.listen(3000, function () {
    console.log("server running at port 3000")
});

