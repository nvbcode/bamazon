// import express
const express = require('express');
// import path
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3300;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// routing, passing app as an argument
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

const db = require('./models');

// will sync database and THEN starts the server
db.sequelize.sync().then(function(){

    app.listen(PORT, function() {
        console.log(`App is now listening on PORT ${PORT}`);
    });

});


