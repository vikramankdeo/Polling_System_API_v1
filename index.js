const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8003;

const db = require('./config/mongoose.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies


app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running srver - ${err}`);
    }
    console.log("service is up and running");
})
