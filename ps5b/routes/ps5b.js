const express = require('express');
const router = express.Router();
const APICONFIG = require('../configs/APICONFIG');
const fetch = require("node-fetch");

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
    if (err) {throw new Error('error when flushed')}
})

//Used the weather API to retrieve the temperature of a city in Fahrenheit

router.route('/')
    .get((req, res, next) => {
        res.render('ps5b', {});
    })
    .post( async (req, res, next) => {
        //grab value
        let city = req.body.city;
        //check cache, using value as key
        let match = await asyncExists(city);
        //if in cache, return
        if (match) {
            let temp = await asyncGet(city);
            let response = {
                city: req.body.city,
                temp: temp,
                cached: true
            }
            res.json(response);
            //res.render('ps5b', {'city': response.city, 'temp_f': response.temp});
        }
        else {
            postData(req.body.city).then(
                async postData => {
                    let status = await asyncSet(city, postData.current.temp_f);
                    status = await asyncExpire(city, 15);
                    let response = {
                        city: city,
                        temp: postData.current.temp_f,
                        cached: false
                    }
                    res.json(response);
                    //res.render('ps5b', {'city': response.city, 'temp_f': response.temp});

                }
            )
                .catch(error => {
                    console.log('Caught an error: ' + error.message);
                })
                .finally(_ => {
                    console.log('Done');
                })
        }
    })

async function postData(city = '', data = {}) {
    const response = await fetch(APICONFIG.url + 'key=' + APICONFIG.key + '&q=' + city);
    const responsejson = await response.json();
    return responsejson;
}

module.exports = router;