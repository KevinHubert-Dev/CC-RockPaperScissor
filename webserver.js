/* import express */ 
var express = require('express')

/* Create expres-instance */ 
var app = express()

/* serve files from "./dist" folder */ 
app.use('/', express.static('dist'));

/* Use port configured in env-variable or 8080 and start webserver */
const port = process.env.ROCK_PAPER_SCISSOR_PORT || 8080;
app.listen(port, () => {
    console.log(`Webserver is now listing on ::${port}`)
})