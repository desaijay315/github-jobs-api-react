const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 5000;  

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));



app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });