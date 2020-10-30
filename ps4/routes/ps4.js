const express = require('express');
const router = express.Router();
const APICONFIG = require('../configs/APICONFIG');
const fetch = require("node-fetch");

//Used the weather API to retrieve the temperature of a city in Fahrenheit

router.route('/')
    .get((req, res, next) => {
        res.render('ps4', {});

    })
    .post((req, res, next) => {
        postData(req.body.city).then(
            postData => {
                console.log(postData);
                res.render('ps4', {'city': req.body.city, 'temp_f': postData.current.temp_f});
                console.log(req.body.city);
                console.log(postData.current.temp_f);
            }
        )
            .catch(error => {
                console.log('Caught an error: ${error.message}');
            })
            .finally(_ => {
                console.log('Done');
            })
    })

async function postData(city = '', data = {}) {
    const response = await fetch(APICONFIG.url + 'key=' + APICONFIG.key + '&q=' + city);
    const responsejson = await response.json();
    return responsejson;
}

module.exports = router;