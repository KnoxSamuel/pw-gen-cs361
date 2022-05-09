/*
 * Name: Samuel Knox
 * Email: knoxsa@oregonstate.edu
 * 
 * CS361: Password Generator Microservice
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 80

const { generatePassword } = require('./PasswordGen')

app.use(express.json());


// default endpoint - password gen
app.get('/', function (req, res, next) {

    const pw = generatePassword(10); // default 10 chars, no pw len specified in url
    res.status(200).json({pw});
});



// return longer passwords (accepted 1-64)
app.get('/:pwlen', function (req, res, next) {

    const pwlen = parseInt(req.params.pwlen);
    const pw = generatePassword(pwlen);

    if ( (pwlen > 0) && (pwlen < 65) ) {
        res.status(200).json({pw})
    } else {
        res.status(404).send({
            err: "Password length: " + req.originalUrl + " is out-of-bounds (1-64 inclusive)"
        });
    };
});



// 404 route
app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
});
